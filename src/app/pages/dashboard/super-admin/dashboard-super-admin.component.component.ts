import { Component, OnDestroy, OnInit } from "@angular/core"
import { Subscription } from "rxjs"
import { AssetService } from "../../../service/asset.service"

@Component({
    selector: 'dashboard-super-admin',
    templateUrl: './dashboard-super-admin.component.html'
})

export class DashboardSuperAdminComponent implements OnInit, OnDestroy {
    private assetSubscription?: Subscription
    private assetDeployableSubscription?: Subscription
    private assetDeployableGeneralSubscription?: Subscription
    private assetDeployableComponentSubscription?: Subscription
    assetsLength: number = 0
    assetDeployablesLength: number = 0
    assetDeployableGeneralsLength: number = 0
    assetDeployableComponentsLength: number = 0

    constructor(private assetService: AssetService) { }

    ngOnInit(): void {
        this.assetSubscription = this.assetService.getAll().subscribe(result => {
            this.assetsLength = result.data.length
        })
        this.assetDeployableSubscription = this.assetService.getAllDeployable().subscribe(result => {
            this.assetDeployablesLength = result.data.length
        })
        this.assetDeployableGeneralSubscription = this.assetService.getAllDeployableGeneral().subscribe(result => {
            this.assetDeployableGeneralsLength = result.data.length
        })
        this.assetDeployableComponentSubscription = this.assetService.getAllDeployableComponent().subscribe(result => {
            this.assetDeployableComponentsLength = result.data.length
        })
    }

    ngOnDestroy(): void {
        this.assetSubscription?.unsubscribe()
        this.assetDeployableSubscription?.unsubscribe()
        this.assetDeployableGeneralSubscription?.unsubscribe()
        this.assetDeployableComponentSubscription?.unsubscribe()
    }
}