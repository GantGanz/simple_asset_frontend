import { Injectable } from "@angular/core"
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router"
import { ROLE_CODE } from "../constant/RoleCode"

@Injectable({
    providedIn: "root"
})
export class CanActiveAuth implements CanActivate {
    constructor(private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const data = localStorage.getItem("data")
        if (data) {
            const roleCode = JSON.parse(data).roleCode
            if (roleCode == ROLE_CODE.NA) {
                this.router.navigateByUrl('/dashboard/non-admin')
            } else {
                this.router.navigateByUrl('/dashboard/super-admin')
            }
            return false
        } else {
            return true
        }
    }

}