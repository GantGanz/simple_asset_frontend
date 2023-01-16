import { Component, OnDestroy, OnInit } from "@angular/core"
import { ActivatedRoute } from "@angular/router"
import { Subscription } from "rxjs"
import { UserUpdateReqDto } from "../../../dto/user/user.update.req.dto"
import { UserService } from "../../../service/user.service"

@Component({
    selector: 'user-update',
    templateUrl: './user-update.component.html'
})
export class UserUpdateComponent implements OnInit, OnDestroy {
    private userSubscription?: Subscription
    userUpdateDto = new UserUpdateReqDto()

    constructor(private userService: UserService, private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(resultUrl => {
            this.userSubscription = this.userService.getById(resultUrl['id']).subscribe(result => {
                this.userUpdateDto._userId = result.data.userId
                this.userUpdateDto._fullname = result.data.fullname
                this.userUpdateDto._password = result.data.password
                this.userUpdateDto._email = result.data.email
                this.userUpdateDto._isActive = result.data.isActive
                this.userUpdateDto._version = result.data.version
            })
        })
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