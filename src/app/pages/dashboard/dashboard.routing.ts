import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { AdminGuard } from "../../guard/admin.guard"
import { NonAdminGuard } from "../../guard/non-admin.guard"
import { ContentNonAdminComponent } from "../../components/content/non-admin/content-non-admin.component"
import { ContentSuperAdminComponent } from "../../components/content/super-admin/content-super-admin.component"
import { DashboardNonAdminComponent } from "./non-admin/dashboard-non-admin.component.component"
import { DashboardSuperAdminComponent } from "./super-admin/dashboard-super-admin.component.component"

const routes: Routes = [
    {
        path: 'super-admin',
        component: ContentSuperAdminComponent,
        children: [
            {
                path: "",
                component: DashboardSuperAdminComponent
            }
        ],
        canActivate: [AdminGuard]
    },
    {
        path: 'non-admin',
        component: ContentNonAdminComponent,
        children: [
            {
                path: "",
                component: DashboardNonAdminComponent
            }
        ],
        canActivate: [NonAdminGuard]
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
export class DashboardRouting { }