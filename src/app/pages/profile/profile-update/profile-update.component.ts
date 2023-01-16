import { Component, OnDestroy, OnInit } from "@angular/core"
import { ActivatedRoute } from "@angular/router"
import { Subscription } from "rxjs"
import { ROLE_CODE } from "../../../constant/RoleCode"
import { UserUpdateReqDto } from "../../../dto/user/user.update.req.dto"
import { ApiService } from "../../../service/api.service"
import { UserService } from "../../../service/user.service"

@Component({
    selector: 'profile-update',
    templateUrl: './profile-update.component.html'
})

export class ProfileUpdateComponent implements OnInit, OnDestroy {
    private userSubscription?: Subscription
    userUpdateDto = new UserUpdateReqDto()
    constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute, private userService: UserService) { }
    profileUrl: string = "/profile/super-admin"

    ngOnInit(): void {
        const roleCode = this.apiService.getRoleCode()
        this.userSubscription = this.userService.getById(this.apiService.getId()).subscribe(result => {
            this.userUpdateDto._userId = result.userId
            this.userUpdateDto._fullname = result.fullname
            this.userUpdateDto._email = result.email
            this.userUpdateDto._isActive = result.isActive
            this.userUpdateDto._version = result.version
        })
        if (roleCode == ROLE_CODE.NA) {
            this.profileUrl = "/profile/non-admin"
        }
    }

    fileUpload(event: any): void {
        const toBase64 = (file: File) => new Promise<string>((resolve, reject) => {
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = () => {
                if (typeof reader.result === "string") resolve(reader.result)
            }
            reader.onerror = error => reject(error)
        })

        toBase64(event.target.files[0]).then(result => {
            const resultStr = result.substring(result.indexOf(",") + 1, result.length)
            const resultExtensions = result.split(';')[0].split('/')[1]
            this.userUpdateDto._fileCodes = resultStr
            this.userUpdateDto._extensions = resultExtensions
        })
    }

    saveUpdate(): void {
        this.userSubscription = this.userService.updateUser(this.userUpdateDto).subscribe()
    }

    ngOnDestroy(): void {
        this.userSubscription?.unsubscribe()
    }
}