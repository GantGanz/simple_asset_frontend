import { NgModule } from "@angular/core"
import { RouterModule } from "@angular/router"
import { CompanyListComponent } from "./company-list/company-list.component"
import { CompanyInsertComponent } from "./company-insert/company-insert.component"
import { CompanyUpdateComponent } from "./company-update/company-update.component"
import { CompanyRouting } from "./company.routing"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"

@NgModule({
    declarations: [
        CompanyListComponent, CompanyInsertComponent, CompanyUpdateComponent
    ],
    imports: [
        CompanyRouting,
        RouterModule,
        CommonModule,
        FormsModule
    ],
    exports: [
        CompanyListComponent, CompanyInsertComponent, CompanyUpdateComponent
    ]
})
export class CompanyModule { }