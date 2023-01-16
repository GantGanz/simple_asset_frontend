import { Component, OnDestroy, OnInit } from "@angular/core"
import { Subscription } from "rxjs"
import { BASE_URL } from "../../../constant/BaseUrl"
import { AssetsDto } from "../../../dto/asset/assets.dto"
import { AssetService } from "../../../service/asset.service"

@Component({
    selector: 'asset-list',
    templateUrl: './asset-list.component.html'
})
export class AssetListComponent implements OnInit, OnDestroy {
    assetsDto = new AssetsDto()
    private assetSubscription?: Subscription
    fileDownload = `${BASE_URL}/files/download/`
    itemId = 1

    constructor(private assetService: AssetService) { }

    ngOnInit(): void {
        this.init()
    }

    getItemId(id: number) {
        this.itemId = id
    }

    delete() {
        this.assetSubscription = this.assetService.delete(this.itemId).subscribe(() => {
            this.init()
        })
    }

    init() {
        this.assetSubscription = this.assetService.getAll().subscribe(result => {
            this.assetsDto = result
        })
    }

    ngOnDestroy(): void {
        this.assetSubscription?.unsubscribe()
    }
}