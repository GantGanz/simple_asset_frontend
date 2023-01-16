import { Component, OnDestroy, OnInit } from "@angular/core"
import { Subscription } from "rxjs"
import { AssetStatusesDto } from "../../../dto/asset-status/asset.statuses.dto"
import { AssetTypesDto } from "../../../dto/asset-type/asset.types.dto"
import { AssetInsertReqDto } from "../../../dto/asset/asset.insert.req.dto"
import { AssetsDto } from "../../../dto/asset/assets.dto"
import { ProvidersDto } from "../../../dto/provider/providers.dto"
import { AssetService } from "../../../service/asset.service"
import { AssetStatusService } from "../../../service/asset.status.service"
import { AssetTypeService } from "../../../service/asset.type.service"
import { ProviderService } from "../../../service/provider.service"
import { CompanyService } from "../../../service/company.service"
import { CompaniesDto } from "../../../dto/company/companies.dto"
import { Router } from "@angular/router"

@Component({
    selector: 'asset-insert',
    templateUrl: './asset-insert.component.html'
})
export class AssetInsertComponent implements OnInit, OnDestroy {
    private assetSubscription?: Subscription
    private assetStatusSubscription?: Subscription
    private assetTypeSubscription?: Subscription
    private providerSubscription?: Subscription
    private companySubscription?: Subscription

    assetsDto = new AssetsDto()
    assetInsertReqDto = new AssetInsertReqDto()
    assetStatusesDto = new AssetStatusesDto()
    assetTypesDto = new AssetTypesDto()
    providersDto = new ProvidersDto()
    companiesDto = new CompaniesDto()

    constructor(private assetService: AssetService, private assetStatusService: AssetStatusService,
        private assetTypeService: AssetTypeService, private providerService: ProviderService,
        private companyService: CompanyService, private router: Router
    ) { }

    ngOnInit(): void {
        this.assetStatusSubscription = this.assetStatusService.getAll().subscribe(result => {
            this.assetStatusesDto = result
        })
        this.assetTypeSubscription = this.assetTypeService.getAll().subscribe(result => {
            this.assetTypesDto = result
        })
        this.providerSubscription = this.providerService.getAll().subscribe(result => {
            this.providersDto = result
        })
        this.companySubscription = this.companyService.getAll().subscribe(result => {
            this.companiesDto = result
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
            this.assetInsertReqDto._fileCodes = resultStr
            this.assetInsertReqDto._extensions = resultExtensions
        })
    }

    submitInsert(): void {
        this.assetSubscription = this.assetService.insertAsset(this.assetInsertReqDto).subscribe(() => this.router.navigateByUrl("/assets"))
    }

    ngOnDestroy(): void {
        this.assetSubscription?.unsubscribe()
        this.assetStatusSubscription?.unsubscribe()
        this.assetTypeSubscription?.unsubscribe()
        this.providerSubscription?.unsubscribe()
        this.companySubscription?.unsubscribe()
    }
}