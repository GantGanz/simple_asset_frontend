import { Component, OnDestroy, OnInit } from "@angular/core"
import { Subscription } from "rxjs"
import { BASE_URL } from "../../../constant/BaseUrl"
import { ProvidersDto } from "../../../dto/provider/providers.dto"
import { ProviderService } from "../../../service/provider.service"

@Component({
    selector: 'provider-list',
    templateUrl: './provider-list.component.html'
})
export class ProviderListComponent implements OnInit, OnDestroy {
    providersDto = new ProvidersDto()
    private providerSubscription?: Subscription
    fileDownload = `${BASE_URL}/files/download/`
    itemId = 1

    constructor(private providerService: ProviderService) { }

    ngOnInit(): void {
        this.providerSubscription = this.providerService.getAll().subscribe(result => {
            this.providersDto = result
        })
    }
    getItemId(id: number) {
        this.itemId = id
    }

    delete() {
        this.providerSubscription = this.providerService.delete(this.itemId).subscribe(() => {
            this.init()
        })
    }

    init() {
        this.providerSubscription = this.providerService.getAll().subscribe(result => {
            this.providersDto = result
        })
    }
    ngOnDestroy(): void {
        this.providerSubscription?.unsubscribe()
    }
}