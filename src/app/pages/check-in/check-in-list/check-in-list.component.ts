import { Component, OnDestroy, OnInit } from "@angular/core"
import { Subscription } from "rxjs"
import { CheckInsDto } from "../../../dto/check-in/check.ins.dto"
import { CheckInService } from "../../../service/check.in.service"

@Component({
    selector: 'check-in-list',
    templateUrl: './check-in-list.component.html'
})
export class CheckInListComponent implements OnInit, OnDestroy {
    checkInsDto = new CheckInsDto()
    private checkInSubscription?: Subscription

    constructor(private checkInService: CheckInService) { }

    ngOnInit(): void {
        this.checkInSubscription = this.checkInService.getAll().subscribe(result => {
            this.checkInsDto = result
        })
    }

    ngOnDestroy(): void {
        this.checkInSubscription?.unsubscribe()
    }
}