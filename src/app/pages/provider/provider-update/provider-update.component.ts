import { Component, OnDestroy, OnInit } from "@angular/core"
import { ActivatedRoute } from "@angular/router"
import { Subscription } from "rxjs"
import { ProviderUpdateReqDto } from "../../../dto/provider/provider.update.req.dto"
import { StoresDto } from "../../../dto/store/stores.dto"
import { ProviderService } from "../../../service/provider.service"
import { StoreService } from "../../../service/store.service"

@Component({
    selector: 'provider-update',
    templateUrl: './provider-update.component.html'
})
export class ProviderUpdateComponent implements OnInit, OnDestroy {
    private providerSubscription?: Subscription
    private storeSubscription?: Subscription
    providerUpdateDto = new ProviderUpdateReqDto()
    storesDto = new StoresDto()

    constructor(private providerService: ProviderService, private storeService: StoreService, private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        this.storeSubscription = this.storeService.getAll().subscribe(result => {
            this.storesDto = result
        })
        this.activatedRoute.params.subscribe(result => {
            this.providerSubscription = this.providerService.getById(result['id']).subscribe(result => {
                this.providerUpdateDto._providerId = result.providerId
                this.providerUpdateDto._providerName = result.providerName
                this.providerUpdateDto._providerCode = result.providerCode
                this.providerUpdateDto._storeId = result.storeId
                this.providerUpdateDto._isActive = result.isActive
                this.providerUpdateDto._version = result.version
            })
        })
    }

    fileUpload(event: any): void {
        const toBase64 = (file: File) => new Promise<string>((resolve, reject) => {
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = () => {
                if (typeof reader.result === "string") resolve(reader.result)
            }
            reader.onerror = error => reject(error)
        })

        toBase64(event.target.files[0]).then(result => {
            const resultStr = result.substring(result.indexOf(",") + 1, result.length)
            const resultExtensions = result.split(';')[0].split('/')[1]
            this.providerUpdateDto._fileCodes = resultStr
            this.providerUpdateDto._extensions = resultExtensions
        })
    }

    saveUpdate(): void {
        this.providerSubscription = this.providerService.updateProvider(this.providerUpdateDto).subscribe()
    }

    ngOnDestroy(): void {
        this.providerSubscription?.unsubscribe()
        this.storeSubscription?.unsubscribe()
    }
}