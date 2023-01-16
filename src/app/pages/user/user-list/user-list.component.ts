import { Component, OnDestroy, OnInit } from "@angular/core"
import { UsersDto } from "../../../dto/user/users.dto"
import { UserService } from "../../../service/user.service"
import { Subscription } from "rxjs"
import { BASE_URL } from "../../../constant/BaseUrl"

@Component({
    selector: 'user-list',
    templateUrl: './user-list.component.html',
})
export class UserListComponent implements OnInit, OnDestroy {
    usersDto = new UsersDto()
    private userSubscription?: Subscription
    fileDownload = `${BASE_URL}/files/download/`
    itemId = 1

    constructor(private userService: UserService) { }

    ngOnInit(): void {
        this.init()
    }

    getItemId(id: number) {
        this.itemId = id
    }

    delete() {
        this.userSubscription = this.userService.delete(this.itemId).subscribe(() => {
            this.init()
        })
    }

    init() {
        this.userSubscription = this.userService.getAll().subscribe(result => {
            this.usersDto = result
        })
    }
    ngOnDestroy(): void {
        this.userSubscription?.unsubscribe()
    }
}