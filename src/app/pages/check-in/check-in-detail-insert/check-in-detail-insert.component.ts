import { Component, OnDestroy, OnInit } from "@angular/core"
import { ActivatedRoute, Router } from "@angular/router"
import { ToastrService } from "ngx-toastr"
import { Subscription } from "rxjs"
import { AssetStatusesDto } from "../../../dto/asset-status/asset.statuses.dto"
import { CheckInDetailInsertReqDto } from "../../../dto/check-in-detail/check.in.detail.insert.req.dto"
import { CheckInInsertReqDto } from "../../../dto/check-in/check.in.insert.req.dto"
import { CheckOutDetailsDto } from "../../../dto/check-out-detail/check.out.details.dto"
import { AssetStatusService } from "../../../service/asset.status.service"
import { CheckInService } from "../../../service/check.in.service"
import { CheckOutDetailService } from "../../../service/check.out.detail.service"

@Component({
    selector: 'check-in-detail-insert',
    templateUrl: './check-in-detail-insert.component.html'
})
export class CheckInDetailInsertComponent implements OnInit, OnDestroy {
    inputs: CheckInDetailInsertReqDto[] = []
    checkInInsertReqDto = new CheckInInsertReqDto()
    checkInDetailInsertReqDto = new CheckInDetailInsertReqDto()
    checkOutDetailsDto = new CheckOutDetailsDto()
    assetStatusesDto = new AssetStatusesDto()
    private checkOutDetailSubscription?: Subscription
    private assetStatusSubscription?: Subscription
    private checkInSubscription?: Subscription
    optionValue = '1'
    checkOutId = 1

    constructor(private checkInService: CheckInService, private router: Router, private checkOutDetailService: CheckOutDetailService,
        private assetStatusService: AssetStatusService, private activatedRoute: ActivatedRoute, private toast: ToastrService) { }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(result => {
            this.checkOutId = result['id']
            this.checkOutDetailSubscription = this.checkOutDetailService.getAllNotCheckInById(result['id']).subscribe(result => {
                this.checkOutDetailsDto = result
            })
        })
        this.assetStatusSubscription = this.assetStatusService.getAll().subscribe(result => {
            this.assetStatusesDto = result
        })
    }

    onChange(event: any) {
        this.optionValue = event.target.value
    }

    addForm() {
        if (this.inputs.length < this.checkOutDetailsDto.data.length) {
            this.inputs.push(new CheckInDetailInsertReqDto())
        } else {
            this.toast.warning("No more asset can be checked in")
        }
    }

    changeAsset(i: number, event: any) {
        this.inputs[i]._checkOutDetailId = event.target.value
    }

    changeStatus(i: number, event: any) {
        this.inputs[i]._assetStatusId = event.target.value
    }

    remove(i: number) {
        this.inputs.splice(i, 1)
    }

    submitInsert() {
        if (this.inputs.length != 0) {
            this.checkInInsertReqDto._checkInDetails = this.inputs
            this.checkInInsertReqDto._checkOutId = this.checkOutId
            this.checkInSubscription = this.checkInService.insertCheckIn(this.checkInInsertReqDto).subscribe(() => this.router.navigateByUrl("/check-ins"))
        } else {
            this.toast.warning("Add atleast 1 asset")
        }
    }

    ngOnDestroy(): void {
        this.checkOutDetailSubscription?.unsubscribe()
        this.assetStatusSubscription?.unsubscribe()
        this.checkInSubscription?.unsubscribe()
    }
}