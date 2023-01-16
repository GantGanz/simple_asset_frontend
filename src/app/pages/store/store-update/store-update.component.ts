import { Component, OnDestroy, OnInit } from "@angular/core"
import { ActivatedRoute } from "@angular/router"
import { Subscription } from "rxjs"
import { StoreUpdateReqDto } from "../../../dto/store/store.update.req.dto"
import { StoreService } from "../../../service/store.service"

@Component({
    selector: 'store-update',
    templateUrl: './store-update.component.html'
})
export class StoreUpdateComponent implements OnInit, OnDestroy {
    private storeSubscription?: Subscription
    storeUpdateDto = new StoreUpdateReqDto()

    constructor(private storeService: StoreService, private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(result => {
            this.storeSubscription = this.storeService.getById(result['id']).subscribe(result => {
                this.storeUpdateDto._storeId = result.storeId
                this.storeUpdateDto._storeName = result.storeName
                this.storeUpdateDto._storeCode = result.storeCode
                this.storeUpdateDto._isActive = result.isActive
                this.storeUpdateDto._version = result.version
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
            this.storeUpdateDto._fileCodes = resultStr
            this.storeUpdateDto._extensions = resultExtensions
        })
    }

    saveUpdate(): void {
        this.storeSubscription = this.storeService.updateStore(this.storeUpdateDto).subscribe()
    }

    ngOnDestroy(): void {
        this.storeSubscription?.unsubscribe()
    }
}