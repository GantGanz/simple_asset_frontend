import { Component, OnDestroy, OnInit } from "@angular/core"
import { Router } from "@angular/router"
import { Subscription } from "rxjs"
import { StoreInsertReqDto } from "../../../dto/store/store.insert.req.dto"
import { StoresDto } from "../../../dto/store/stores.dto"
import { StoreService } from "../../../service/store.service"
@Component({
    selector: 'store-insert',
    templateUrl: './store-insert.component.html'
})
export class StoreInsertComponent implements OnInit, OnDestroy {
    storesDto = new StoresDto()
    private storeSubscription?: Subscription
    storeInsertReqDto = new StoreInsertReqDto()

    constructor(private storeService: StoreService, private router: Router) { }

    ngOnInit(): void {

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
            this.storeInsertReqDto._fileCodes = resultStr
            this.storeInsertReqDto._extensions = resultExtensions
        })
    }

    submitInsert(): void {
        this.storeSubscription = this.storeService.insertStore(this.storeInsertReqDto).subscribe(() => this.router.navigateByUrl("/stores"))
    }

    ngOnDestroy(): void {
        this.storeSubscription?.unsubscribe()
    }
}