import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { RouterModule } from "@angular/router"
import { EmployeeInsertComponent } from "./employee-insert/employee-insert.component"
import { EmployeeListComponent } from "./employee-list/employee-list.component"
import { EmployeeUpdateComponent } from "./employee-update/employee-update.component"
import { EmployeeRouting } from "./employee.routing"

@NgModule({
    declarations: [
        EmployeeListComponent, EmployeeInsertComponent, EmployeeUpdateComponent
    ],
    imports: [
        EmployeeRouting,
        RouterModule,
        CommonModule,
        FormsModule
    ],
    exports: [
        EmployeeListComponent, EmployeeInsertComponent, EmployeeUpdateComponent
    ]
})
export class EmployeeModule { }