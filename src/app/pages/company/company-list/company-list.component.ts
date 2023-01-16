import { Component, OnDestroy, OnInit } from "@angular/core"
import { CompaniesDto } from "../../../dto/company/companies.dto"
import { CompanyService } from "../../../service/company.service"
import { Subscription } from "rxjs"
import { BASE_URL } from "../../../constant/BaseUrl"

@Component({
    selector: 'company-list',
    templateUrl: './company-list.component.html',
})
export class CompanyListComponent implements OnInit, OnDestroy {
    companiesDto = new CompaniesDto()
    private companySubscription?: Subscription
    fileDownload = `${BASE_URL}/files/download/`
    itemId = 1

    constructor(private companyService: CompanyService) { }

    ngOnInit(): void {
        this.init()
    }

    getItemId(id: number) {
        this.itemId = id
    }

    delete() {
        this.companySubscription = this.companyService.delete(this.itemId).subscribe(() => {
            this.init()
        })
    }

    init() {
        this.companySubscription = this.companyService.getAll().subscribe(result => {
            this.companiesDto = result
        })
    }

    ngOnDestroy(): void {
        this.companySubscription?.unsubscribe()
    }
}