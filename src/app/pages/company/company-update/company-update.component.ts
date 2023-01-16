import { Component, OnDestroy, OnInit } from "@angular/core"
import { ActivatedRoute } from "@angular/router"
import { Subscription } from "rxjs"
import { CompanyUpdateReqDto } from "../../../dto/company/company.update.req.dto"
import { CompanyService } from "../../../service/company.service"
@Component({
    selector: 'company-update',
    templateUrl: './company-update.component.html'
})
export class CompanyUpdateComponent implements OnInit, OnDestroy {
    private companySubscription?: Subscription
    companyUpdateDto = new CompanyUpdateReqDto()

    constructor(private companyService: CompanyService, private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(result => {
            this.companySubscription = this.companyService.getById(result['id']).subscribe(result => {
                this.companyUpdateDto._companyId = result.companyId
                this.companyUpdateDto._companyName = result.companyName
                this.companyUpdateDto._companyCode = result.companyCode
                this.companyUpdateDto._isActive = result.isActive
                this.companyUpdateDto._version = result.version
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
            this.companyUpdateDto._fileCodes = resultStr
            this.companyUpdateDto._extensions = resultExtensions
        })
    }

    saveUpdate(): void {
        this.companySubscription = this.companyService.updateCompany(this.companyUpdateDto).subscribe()
    }

    ngOnDestroy(): void {
        this.companySubscription?.unsubscribe()
    }
}