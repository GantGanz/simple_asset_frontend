import { Component, OnDestroy, OnInit } from "@angular/core"
import { ActivatedRoute } from "@angular/router"
import { Subscription } from "rxjs"
import { AssetStatusesDto } from "../../../dto/asset-status/asset.statuses.dto"
import { AssetTypesDto } from "../../../dto/asset-type/asset.types.dto"
import { AssetUpdateReqDto } from "../../../dto/asset/asset.update.req.dto"
import { CompaniesDto } from "../../../dto/company/companies.dto"
import { ProvidersDto } from "../../../dto/provider/providers.dto"
import { AssetService } from "../../../service/asset.service"
import { AssetStatusService } from "../../../service/asset.status.service"
import { AssetTypeService } from "../../../service/asset.type.service"
import { CompanyService } from "../../../service/company.service"
import { ProviderService } from "../../../service/provider.service"

@Component({
    selector: 'asset-update',
    templateUrl: './asset-update.component.html'
})
export class AssetUpdateComponent implements OnInit, OnDestroy {
    private assetSubscription?: Subscription
    private storeSubscription?: Subscription
    private assetStatusSubscription?: Subscription
    private assetTypeSubscription?: Subscription
    private providerSubscription?: Subscription
    private companySubscription?: Subscription
    assetUpdateDto = new AssetUpdateReqDto()
    assetStatusesDto = new AssetStatusesDto()
    assetTypesDto = new AssetTypesDto()
    providersDto = new ProvidersDto()
    companiesDto = new CompaniesDto()

    constructor(private assetService: AssetService, private assetStatusService: AssetStatusService, private activatedRoute: ActivatedRoute,
        private assetTypeService: AssetTypeService, private providerService: ProviderService,
        private companyService: CompanyService) { }

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
        this.activatedRoute.params.subscribe(result => {
            this.assetSubscription = this.assetService.getById(result['id']).subscribe(result => {
                this.assetUpdateDto._assetId = result.assetId
                this.assetUpdateDto._assetName = result.assetName
                this.assetUpdateDto._serialNumber = result.serialNumber
                this.assetUpdateDto._invoiceNumber = result.invoiceNumber
                this.assetUpdateDto._expiredDate = result.expiredDate
                this.assetUpdateDto._assetStatusId = result.assetStatusId
                this.assetUpdateDto._assetStatusName = result.assetStatusName
                this.assetUpdateDto._invoiceNumber = result.invoiceNumber
                this.assetUpdateDto._assetTypeName = result.assetTypeName
                this.assetUpdateDto._assetTypeId = result.assetTypeId
                this.assetUpdateDto._companyName = result.companyName
                this.assetUpdateDto._companyId = result.companyId
                this.assetUpdateDto._providerName = result.providerName
                this.assetUpdateDto._providerId = result.providerId
                this.assetUpdateDto._isActive = result.isActive
                this.assetUpdateDto._version = result.version
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
            this.assetUpdateDto._fileCodes = resultStr
            this.assetUpdateDto._extensions = resultExtensions
        })
    }

    saveUpdate(): void {
        this.assetSubscription = this.assetService.updateAsset(this.assetUpdateDto).subscribe()
    }

    ngOnDestroy(): void {
        this.assetSubscription?.unsubscribe()
        this.storeSubscription?.unsubscribe()
    }
}