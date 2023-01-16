import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { RouterModule } from "@angular/router"
import { AssetInsertComponent } from "./asset-insert/asset-insert.component"
import { AssetListComponent } from "./asset-list/asset-list.component"
import { AssetUpdateComponent } from "./asset-update/asset-update.component"
import { AssetRouting } from "./asset.routing"

@NgModule({
    declarations: [
        AssetListComponent, AssetInsertComponent, AssetUpdateComponent
    ],
    imports: [
        AssetRouting,
        RouterModule,
        CommonModule,
        FormsModule
    ],
    exports: [
        AssetListComponent, AssetInsertComponent, AssetUpdateComponent
    ]
})
export class AssetModule { }