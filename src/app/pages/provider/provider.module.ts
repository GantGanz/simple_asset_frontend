import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { RouterModule } from "@angular/router"
import { ProviderInsertComponent } from "./provider-insert/provider-insert.component"
import { ProviderListComponent } from "./provider-list/provider-list.component"
import { ProviderUpdateComponent } from "./provider-update/provider-update.component"
import { ProviderRouting } from "./provider.routing"

@NgModule({
    declarations: [
        ProviderListComponent, ProviderInsertComponent, ProviderUpdateComponent
    ],
    imports: [
        ProviderRouting,
        RouterModule,
        CommonModule,
        FormsModule
    ],
    exports: [
        ProviderListComponent, ProviderInsertComponent, ProviderUpdateComponent
    ]
})
export class ProviderModule { }