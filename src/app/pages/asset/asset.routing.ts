import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { AssetInsertComponent } from "./asset-insert/asset-insert.component"
import { AssetListComponent } from "./asset-list/asset-list.component"
import { AssetUpdateComponent } from "./asset-update/asset-update.component"

const routes: Routes = [
    {
        path: '',
        component: AssetListComponent
    },
    {
        path: 'new',
        component: AssetInsertComponent
    },
    {
        path: 'edit/:id',
        component: AssetUpdateComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AssetRouting { }