import { Component, OnDestroy, OnInit } from "@angular/core"
import { Subscription } from "rxjs"
import { BASE_URL } from "../../../constant/BaseUrl"
import { StoresDto } from "../../../dto/store/stores.dto"
import { StoreService } from "../../../service/store.service"

@Component({
    selector: 'store-list',
    templateUrl: './store-list.component.html'
})
export class StoreListComponent implements OnInit, OnDestroy {
    storesDto = new StoresDto()
    private storeSubscription?: Subscription
    fileDownload = `${BASE_URL}/files/download/`
    itemId = 1

    constructor(private storeService: StoreService) { }

    ngOnInit(): void {
        this.init()
    }

    getItemId(id: number) {
        this.itemId = id
    }

    delete() {
        this.storeSubscription = this.storeService.delete(this.itemId).subscribe(() => {
            this.init()
        })
    }

    init() {
        this.storeSubscription = this.storeService.getAll().subscribe(result => {
            this.storesDto = result
        })
    }
    ngOnDestroy(): void {
        this.storeSubscription?.unsubscribe()
    }
}