import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { RouterModule } from "@angular/router"
import { UserInsertComponent } from "./user-insert/user-insert.component"
import { UserListComponent } from "./user-list/user-list.component"
import { UserUpdateComponent } from "./user-update/user-update.component"
import { UserRouting } from "./user.routing"

@NgModule({
    declarations: [
        UserListComponent, UserInsertComponent, UserUpdateComponent
    ],
    imports: [
        UserRouting,
        RouterModule,
        CommonModule,
        FormsModule
    ],
    exports: [
        UserListComponent, UserInsertComponent, UserUpdateComponent
    ]
})
export class UserModule { }