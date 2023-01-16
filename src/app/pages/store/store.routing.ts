import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { StoreInsertComponent } from "./store-insert/store-insert.component"
import { StoreListComponent } from "./store-list/store-list.component"
import { StoreUpdateComponent } from "./store-update/store-update.component"

const routes: Routes = [
    {
        path: '',
        component: StoreListComponent
    },
    {
        path: 'new',
        component: StoreInsertComponent
    },
    {
        path: 'edit/:id',
        component: StoreUpdateComponent
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
export class StoreRouting { }