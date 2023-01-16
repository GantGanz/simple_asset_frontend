import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { RouterModule } from "@angular/router"
import { ProfilePasswordUpdateComponent } from "./profile-password-update/profile-password-update.component"
import { ProfileShowComponent } from "./profile-show/profile-show.component"
import { ProfileUpdateComponent } from "./profile-update/profile-update.component"
import { ProfileRouting } from "./profile.routing"

@NgModule({
    declarations: [
        ProfileShowComponent, ProfilePasswordUpdateComponent, ProfileUpdateComponent
    ],
    imports: [
        ProfileRouting,
        RouterModule,
        CommonModule,
        FormsModule
    ],
    exports: [
        ProfileShowComponent, ProfilePasswordUpdateComponent, ProfileUpdateComponent
    ]
})
export class ProfileModule { }