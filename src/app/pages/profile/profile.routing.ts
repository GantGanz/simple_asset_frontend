import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { ContentNonAdminComponent } from "../../components/content/non-admin/content-non-admin.component"
import { ContentSuperAdminComponent } from "../../components/content/super-admin/content-super-admin.component"
import { AdminGuard } from "../../guard/admin.guard"
import { NonAdminGuard } from "../../guard/non-admin.guard"
import { ProfilePasswordUpdateComponent } from "./profile-password-update/profile-password-update.component"
import { ProfileShowComponent } from "./profile-show/profile-show.component"
import { ProfileUpdateComponent } from "./profile-update/profile-update.component"

const routes: Routes = [
    {
        path: 'super-admin',
        component: ContentSuperAdminComponent,
        children: [
            {
                path: "",
                component: ProfileShowComponent
            },
            {
                path: 'edit-password',
                component: ProfilePasswordUpdateComponent
            },
            {
                path: 'edit',
                component: ProfileUpdateComponent
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
                component: ProfileShowComponent
            },
            {
                path: 'edit-password',
                component: ProfilePasswordUpdateComponent
            },
            {
                path: 'edit',
                component: ProfileUpdateComponent
            }
        ],
        canActivate: [NonAdminGuard]
    },
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class ProfileRouting { }