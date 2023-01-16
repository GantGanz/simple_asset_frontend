import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { RouterModule } from "@angular/router"
import { StoreInsertComponent } from "./store-insert/store-insert.component"
import { StoreListComponent } from "./store-list/store-list.component"
import { StoreUpdateComponent } from "./store-update/store-update.component"
import { StoreRouting } from "./store.routing"

@NgModule({
    declarations: [
        StoreListComponent, StoreInsertComponent, StoreUpdateComponent
    ],
    imports: [
        StoreRouting,
        RouterModule,
        CommonModule,
        FormsModule
    ],
    exports: [
        StoreListComponent, StoreInsertComponent, StoreUpdateComponent
    ]
})
export class StoreModule { }