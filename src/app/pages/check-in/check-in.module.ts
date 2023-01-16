import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { RouterModule } from "@angular/router"
import { CheckInDetailInsertComponent } from "./check-in-detail-insert/check-in-detail-insert.component"
import { CheckInDetailListComponent } from "./check-in-detail-list/check-in-detail-list.component"
import { CheckInInsertComponent } from "./check-in-insert/check-in-insert.component"
import { CheckInListComponent } from "./check-in-list/check-in-list.component"
import { CheckInRouting } from "./check-in.routing"

@NgModule({
    declarations: [
        CheckInListComponent, CheckInDetailInsertComponent, CheckInInsertComponent, CheckInDetailListComponent
    ],
    imports: [
        CheckInRouting,
        RouterModule,
        CommonModule,
        FormsModule
    ],
    exports: [
        CheckInListComponent, CheckInDetailInsertComponent, CheckInInsertComponent, CheckInDetailListComponent
    ]
})
export class CheckInModule { }