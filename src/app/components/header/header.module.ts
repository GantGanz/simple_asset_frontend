import { NgModule } from "@angular/core"
import { RouterModule } from "@angular/router"
import { HeaderNonAdminComponent } from "./non-admin/header-non-admin.component"
import { HeaderSuperAdminComponent } from "./super-admin/header-super-admin.component"

@NgModule({
    declarations: [
        HeaderSuperAdminComponent, HeaderNonAdminComponent
    ],
    imports: [
        RouterModule
    ],
    exports: [
        HeaderSuperAdminComponent, HeaderNonAdminComponent
    ]
})
export class HeaderModule { }