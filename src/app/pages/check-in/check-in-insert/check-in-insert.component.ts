import { Component, OnDestroy, OnInit } from "@angular/core"
import { Subscription } from "rxjs"
import { CheckOutsDto } from "../../../dto/check-out/check.outs.dto"
import { CheckOutService } from "../../../service/check.out.service"

@Component({
    selector: 'check-in-insert',
    templateUrl: './check-in-insert.component.html'
})
export class CheckInInsertComponent implements OnInit, OnDestroy {
    checkOutsDto = new CheckOutsDto()
    private checkOutSubscription?: Subscription

    constructor(private checkOutService: CheckOutService) { }

    ngOnInit(): void {
        this.checkOutSubscription = this.checkOutService.getAllUnchecked().subscribe(result => {
            this.checkOutsDto = result
        })
    }

    ngOnDestroy(): void {
        this.checkOutSubscription?.unsubscribe()
    }
}