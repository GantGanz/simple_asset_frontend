import { Component, OnDestroy, OnInit } from "@angular/core"
import { Router } from "@angular/router"
import { Subscription } from "rxjs"
import { ProviderInsertReqDto } from "../../../dto/provider/provider.insert.req.dto"
import { ProvidersDto } from "../../../dto/provider/providers.dto"
import { StoresDto } from "../../../dto/store/stores.dto"
import { ProviderService } from "../../../service/provider.service"
import { StoreService } from "../../../service/store.service"
@Component({
    selector: 'provider-insert',
    templateUrl: './provider-insert.component.html'
})
export class ProviderInsertComponent implements OnInit, OnDestroy {
    providersDto = new ProvidersDto()
    private providerSubscription?: Subscription
    providerInsertReqDto = new ProviderInsertReqDto()
    storesDto = new StoresDto()

    constructor(private providerService: ProviderService, private storeService: StoreService, private router: Router) { }

    ngOnInit(): void {
        this.providerSubscription = this.storeService.getAll().subscribe(result => {
            this.storesDto = result
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
            this.providerInsertReqDto._fileCodes = resultStr
            this.providerInsertReqDto._extensions = resultExtensions
        })
    }

    submitInsert(): void {
        this.providerSubscription = this.providerService.insertProvider(this.providerInsertReqDto).subscribe(() => this.router.navigateByUrl("/providers"))
    }

    ngOnDestroy(): void {
        this.providerSubscription?.unsubscribe()
    }
}