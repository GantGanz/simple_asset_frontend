import { NgModule } from "@angular/core"
import { RouterModule } from "@angular/router"
import { HeaderModule } from "../header/header.module"
import { ContentNonAdminComponent } from "./non-admin/content-non-admin.component"
import { ContentSuperAdminComponent } from "./super-admin/content-super-admin.component"

@NgModule({
    declarations: [
        ContentSuperAdminComponent, ContentNonAdminComponent
    ],
    imports: [
        RouterModule, HeaderModule
    ],
    exports: [
        ContentSuperAdminComponent, ContentNonAdminComponent
    ]
})
export class ContentModule { }