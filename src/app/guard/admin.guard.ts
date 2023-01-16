import { Injectable } from "@angular/core"
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment } from "@angular/router"
import { ToastrService } from "ngx-toastr"
import { ROLE_CODE } from "../constant/RoleCode"
import { ApiService } from "../service/api.service"

@Injectable({
    providedIn: "root"
})
export class AdminGuard implements CanLoad, CanActivate {
    constructor(private router: Router, private toast: ToastrService, private apiService: ApiService) {

    }
    canLoad(route: Route, segments: UrlSegment[]): boolean {
        const roleCode = this.apiService.getRoleCode()
        if (roleCode == ROLE_CODE.SA) {
            return true
        } else {
            this.toast.warning("Unauthorized")
            this.router.navigateByUrl('/dashboard/non-admin')
            return false
        }
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const roleCode = this.apiService.getRoleCode()
        const data = this.apiService.getData()
        if (data) {
            if (roleCode == ROLE_CODE.SA) {
                return true
            } else {
                this.toast.warning("Unauthorized")
                this.router.navigateByUrl('/dashboard/non-admin')
                return false
            }
        } else {
            this.toast.warning("Unauthorized")
            this.router.navigateByUrl('/login')
            return false
        }
    }
}