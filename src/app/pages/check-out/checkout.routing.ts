import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { CheckOutDetailListComponent } from "./checkout-detail-list/checkout-detail-list.component"
import { CheckOutInsertComponent } from "./checkout-insert/checkout-insert.component"
import { CheckOutListComponent } from "./checkout-list/checkout-list.component"

const routes: Routes = [
    {
        path: '',
        component: CheckOutListComponent
    },
    {
        path: 'new',
        component: CheckOutInsertComponent
    },
    {
        path: 'all-by-id/:id',
        component: CheckOutDetailListComponent
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
export class CheckOutRouting { }