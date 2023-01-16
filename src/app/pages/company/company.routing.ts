import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { CompanyListComponent } from "./company-list/company-list.component"
import { CompanyInsertComponent } from "./company-insert/company-insert.component"
import { CompanyUpdateComponent } from "./company-update/company-update.component"

const routes: Routes = [
    {
        path: '',
        component: CompanyListComponent
    },
    {
        path: 'new',
        component: CompanyInsertComponent
    },
    {
        path: 'edit/:id',
        component: CompanyUpdateComponent
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
export class CompanyRouting { }