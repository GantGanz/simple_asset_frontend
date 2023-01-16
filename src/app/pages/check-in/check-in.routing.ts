import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { CheckInDetailInsertComponent } from "./check-in-detail-insert/check-in-detail-insert.component"
import { CheckInDetailListComponent } from "./check-in-detail-list/check-in-detail-list.component"
import { CheckInInsertComponent } from "./check-in-insert/check-in-insert.component"
import { CheckInListComponent } from "./check-in-list/check-in-list.component"

const routes: Routes = [
    {
        path: '',
        component: CheckInListComponent
    },
    {
        path: 'new',
        component: CheckInInsertComponent
    },
    {
        path: 'all-by-id/:id',
        component: CheckInDetailListComponent
    },
    {
        path: 'new/:id',
        component: CheckInDetailInsertComponent
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
export class CheckInRouting { }