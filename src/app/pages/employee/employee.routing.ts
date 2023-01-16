import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { EmployeeInsertComponent } from "./employee-insert/employee-insert.component"
import { EmployeeListComponent } from "./employee-list/employee-list.component"
import { EmployeeUpdateComponent } from "./employee-update/employee-update.component"

const routes: Routes = [
    {
        path: '',
        component: EmployeeListComponent
    },
    {
        path: 'new',
        component: EmployeeInsertComponent
    },
    {
        path: 'edit/:id',
        component: EmployeeUpdateComponent
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
export class EmployeeRouting { }