import { Component, OnDestroy, OnInit } from "@angular/core"
import { UsersDto } from "../../../dto/user/users.dto"
import { UserService } from "../../../service/user.service"
import { Subscription } from "rxjs"
import { UserInsertReqDto } from "../../../dto/user/user.insert.req.dto"
import { UserInsertDataResDto } from "../../../dto/user/user.insert.data.res.dto"
import { Router } from "@angular/router"

@Component({
    selector: 'user-insert',
    templateUrl: './user-insert.component.html'
})

export class UserInsertComponent implements OnInit, OnDestroy {
    usersDto = new UsersDto()
    userInsertReqDto = new UserInsertReqDto()
    userInsertDataResDto = new UserInsertDataResDto()
    private userSubscription?: Subscription

    constructor(private userService: UserService, private router: Router) { }

    ngOnInit(): void {

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
            this.userInsertReqDto._fileCodes = resultStr
            this.userInsertReqDto._extensions = resultExtensions
        })
    }

    submitInsert(): void {
        this.userSubscription = this.userService.insertUser(this.userInsertReqDto).subscribe(() => this.router.navigateByUrl("/users"))
    }

    ngOnDestroy(): void {
        this.userSubscription?.unsubscribe()
    }
}