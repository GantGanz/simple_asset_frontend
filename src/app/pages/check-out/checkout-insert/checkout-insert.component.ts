import { Component, OnDestroy, OnInit } from "@angular/core"
import { Router } from "@angular/router"
import { ToastrService } from "ngx-toastr"
import { Subscription } from "rxjs"
import { AssetsDto } from "../../../dto/asset/assets.dto"
import { CheckOutDetailInsertReqDto } from "../../../dto/check-out-detail/check.out.detail.insert.req.dto"
import { CheckOutInsertReqDto } from "../../../dto/check-out/check.out.insert.req.dto"
import { EmployeesDto } from "../../../dto/employee/employees.dto"
import { AssetService } from "../../../service/asset.service"
import { CheckOutService } from "../../../service/check.out.service"
import { EmployeeService } from "../../../service/employee.service"

@Component({
    selector: 'checkout-insert',
    templateUrl: './checkout-insert.component.html'
})
export class CheckOutInsertComponent implements OnInit, OnDestroy {
    inputs: CheckOutDetailInsertReqDto[] = []
    checkOutInsertReqDto = new CheckOutInsertReqDto()
    checkOutDetailInsertReqDto = new CheckOutDetailInsertReqDto()
    assetsDto = new AssetsDto()
    assetGeneralsDto = new AssetsDto()
    assetComponentsDto = new AssetsDto()
    employeesDto = new EmployeesDto()
    private checkOutSubscription?: Subscription
    private assetSubscription?: Subscription
    private assetDeployableGeneralSubscription?: Subscription
    private assetDeployableComponentSubscription?: Subscription
    private employeeSubscription?: Subscription
    optionValue = '1'

    constructor(private checkOutService: CheckOutService, private router: Router, private assetService: AssetService, private employeeService: EmployeeService, private toast: ToastrService) { }

    ngOnInit(): void {
        this.assetSubscription = this.assetService.getAllDeployable().subscribe(result => {
            this.assetsDto = result
        })
        this.assetDeployableGeneralSubscription = this.assetService.getAllDeployableGeneral().subscribe(result => {
            this.assetGeneralsDto = result
        })
        this.assetDeployableComponentSubscription = this.assetService.getAllDeployableComponent().subscribe(result => {
            this.assetComponentsDto = result
        })
        this.employeeSubscription = this.employeeService.getAll().subscribe(result => {
            this.employeesDto = result
        })
    }

    onChange(event: any) {
        this.optionValue = event.target.value
        this.inputs.splice(0)
    }

    addForm() {
        this.inputs.push(new CheckOutDetailInsertReqDto())
    }

    changeAsset(i: number, event: any) {
        this.inputs[i]._assetId = event.target.value
    }

    changeDate(i: number, event: any) {
        this.inputs[i]._returnDate = event.target.value
    }

    remove(i: number) {
        this.inputs.splice(i, 1)
    }

    submitInsert() {
        if (this.inputs.length != 0) {
            this.checkOutInsertReqDto._checkOutDetails = this.inputs
            this.checkOutSubscription = this.checkOutService.insertCheckOut(this.checkOutInsertReqDto).subscribe(() => this.router.navigateByUrl("/check-outs"))
        } else {
            this.toast.warning("Add atleast 1 asset")
        }
    }

    ngOnDestroy(): void {
        this.assetSubscription?.unsubscribe()
        this.assetDeployableGeneralSubscription?.unsubscribe()
        this.assetDeployableComponentSubscription?.unsubscribe()
        this.employeeSubscription?.unsubscribe()
        this.checkOutSubscription?.unsubscribe()
    }
}