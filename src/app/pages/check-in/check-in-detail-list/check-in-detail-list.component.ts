import { Component, OnDestroy, OnInit } from "@angular/core"
import { ActivatedRoute } from "@angular/router"
import { Subscription } from "rxjs"
import { CheckInDetailsDto } from "../../../dto/check-in-detail/check.in.details.dto"
import { CheckInDetailService } from "../../../service/check.in.detail.service"

@Component({
    selector: 'check-in-detail-list',
    templateUrl: './check-in-detail-list.component.html'
})
export class CheckInDetailListComponent implements OnInit, OnDestroy {
    checkInDetailsDto = new CheckInDetailsDto()
    private checkInDetailSubscription?: Subscription

    constructor(private checkInDetailService: CheckInDetailService, private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(result => {
            this.checkInDetailSubscription = this.checkInDetailService.getAllById(result['id']).subscribe(result => {
                this.checkInDetailsDto = result
            })
        })
    }

    ngOnDestroy(): void {
        this.checkInDetailSubscription?.unsubscribe()
    }
}