import { Component, OnDestroy, OnInit } from "@angular/core"
import { ActivatedRoute } from "@angular/router"
import { ToastrService } from "ngx-toastr"
import { Subscription } from "rxjs"
import { ROLE_CODE } from "../../../constant/RoleCode"
import { UserUpdatePasswordReqDto } from "../../../dto/user/user.update.password.req.dto"
import { ApiService } from "../../../service/api.service"
import { UserService } from "../../../service/user.service"

@Component({
    selector: 'profile-password-update',
    templateUrl: './profile-password-update.component.html'
})
export class ProfilePasswordUpdateComponent implements OnInit, OnDestroy {
    private userSubscription?: Subscription
    userUpdatePasswordReqDto = new UserUpdatePasswordReqDto()
    constructor(private apiService: ApiService, private userService: UserService, private activatedRoute: ActivatedRoute, private toast: ToastrService) { }
    profileUrl: string = "/profile/super-admin"
    confirmPassword: string = ""

    ngOnInit(): void {
        const roleCode = this.apiService.getRoleCode()
        this.userSubscription = this.userService.getById(this.apiService.getId()).subscribe(result => {
            this.userUpdatePasswordReqDto._userId = result.userId
            this.userUpdatePasswordReqDto._version = result.version
        })
        if (roleCode == ROLE_CODE.NA) {
            this.profileUrl = "/profile/non-admin"
        }
    }

    saveUpdate(): void {
        if (this.confirmPassword == this.userUpdatePasswordReqDto._newPassword) {
            this.userSubscription = this.userService.updatePasswordUser(this.userUpdatePasswordReqDto).subscribe()
        } else {
            this.toast.warning("The new password is not equal");
        }
    }

    ngOnDestroy(): void {
        this.userSubscription?.unsubscribe()
    }
}