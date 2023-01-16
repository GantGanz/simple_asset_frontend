import { Component, OnDestroy, OnInit } from "@angular/core"
import { Router } from "@angular/router"
import { ROLE_CODE } from "../../constant/RoleCode"
import { LoginReqDto } from "../../dto/login/login.req.dto"
import { ApiService } from "../../service/api.service"
import { LoginService } from "../../service/login.service"
import { Subscription } from "rxjs"

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['../../app.component.css'],
    providers: []
})

export class LoginComponent implements OnInit, OnDestroy {
    loginReqDto = new LoginReqDto()
    private loginSubscription?: Subscription

    constructor(private loginService: LoginService, private apiService: ApiService, private router: Router) { }

    ngOnInit(): void {

    }

    submit(): void {
        this.loginSubscription = this.loginService.login(this.loginReqDto).subscribe(result => {
            this.apiService.saveData(result)

            if (result.roleCode == ROLE_CODE.NA) {
                this.router.navigateByUrl('/dashboard/non-admin')
            } else {
                this.router.navigateByUrl('/dashboard/super-admin')
            }
        })
    }

    ngOnDestroy(): void {
        this.loginSubscription?.unsubscribe()
    }
}