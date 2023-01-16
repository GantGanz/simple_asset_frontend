import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { RouterModule } from "@angular/router"
import { CheckOutDetailListComponent } from "./checkout-detail-list/checkout-detail-list.component"
import { CheckOutInsertComponent } from "./checkout-insert/checkout-insert.component"
import { CheckOutListComponent } from "./checkout-list/checkout-list.component"
import { CheckOutRouting } from "./checkout.routing"

@NgModule({
    declarations: [
        CheckOutListComponent, CheckOutDetailListComponent, CheckOutInsertComponent
    ],
    imports: [
        CheckOutRouting,
        RouterModule,
        CommonModule,
        FormsModule
    ],
    exports: [
        CheckOutListComponent, CheckOutDetailListComponent, CheckOutInsertComponent
    ]
})
export class CheckOutModule { }