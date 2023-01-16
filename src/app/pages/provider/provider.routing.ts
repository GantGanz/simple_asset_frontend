import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { ProviderInsertComponent } from "./provider-insert/provider-insert.component"
import { ProviderListComponent } from "./provider-list/provider-list.component"
import { ProviderUpdateComponent } from "./provider-update/provider-update.component"

const routes: Routes = [
    {
        path: '',
        component: ProviderListComponent
    },
    {
        path: 'new',
        component: ProviderInsertComponent
    },
    {
        path: 'edit/:id',
        component: ProviderUpdateComponent
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
export class ProviderRouting { }