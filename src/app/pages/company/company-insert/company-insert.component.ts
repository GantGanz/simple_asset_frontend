import { Component, OnDestroy, OnInit } from "@angular/core"
import { Subscription } from "rxjs"
import { CompanyInsertReqDto } from "../../../dto/company/company.insert.req.dto"
import { CompaniesDto } from "../../../dto/company/companies.dto"
import { CompanyService } from "../../../service/company.service"
import { Router } from "@angular/router"

@Component({
    selector: 'company-insert',
    templateUrl: './company-insert.component.html'
})
export class CompanyInsertComponent implements OnInit, OnDestroy {
    companiesDto = new CompaniesDto()
    private companySubscription?: Subscription
    companyInsertReqDto = new CompanyInsertReqDto()

    constructor(private companyService: CompanyService, private router: Router) { }

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
            this.companyInsertReqDto._fileCodes = resultStr
            this.companyInsertReqDto._extensions = resultExtensions
        })
    }

    submitInsert(): void {
        this.companySubscription = this.companyService.insertCompany(this.companyInsertReqDto).subscribe(() => this.router.navigateByUrl("/companies"))
    }

    ngOnDestroy(): void {
        this.companySubscription?.unsubscribe()
    }
}