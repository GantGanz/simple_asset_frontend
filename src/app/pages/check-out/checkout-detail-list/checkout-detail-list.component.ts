import { Component, OnDestroy, OnInit } from "@angular/core"
import { ActivatedRoute } from "@angular/router"
import { Subscription } from "rxjs"
import { CheckOutDetailsDto } from "../../../dto/check-out-detail/check.out.details.dto"
import { CheckOutDetailService } from "../../../service/check.out.detail.service"

@Component({
    selector: 'checkout-detail-list',
    templateUrl: './checkout-detail-list.component.html'
})
export class CheckOutDetailListComponent implements OnInit, OnDestroy {
    checkOutDetailsDto = new CheckOutDetailsDto()
    private checkOutDetailSubscription?: Subscription

    constructor(private checkOutDetailService: CheckOutDetailService, private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(result => {
            this.checkOutDetailSubscription = this.checkOutDetailService.getAllById(result['id']).subscribe(result => {
                this.checkOutDetailsDto = result
            })
        })
    }

    ngOnDestroy(): void {
        this.checkOutDetailSubscription?.unsubscribe()
    }
}