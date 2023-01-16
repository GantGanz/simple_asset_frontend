import { NgModule } from "@angular/core"
import { DashboardSuperAdminComponent } from "./super-admin/dashboard-super-admin.component.component"
import { DashboardRouting } from "./dashboard.routing"
import { DashboardNonAdminComponent } from "./non-admin/dashboard-non-admin.component.component"
import { CommonModule } from "@angular/common"

@NgModule({
    declarations: [
        DashboardSuperAdminComponent, DashboardNonAdminComponent
    ],
    imports: [
        DashboardRouting,
        CommonModule
    ],
    exports: [
        DashboardSuperAdminComponent, DashboardNonAdminComponent
    ]
})
export class DashboardModule { }