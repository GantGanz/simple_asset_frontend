import { Component, OnDestroy, OnInit } from "@angular/core"
import { ActivatedRoute } from "@angular/router"
import { BASE_URL } from "../../../constant/BaseUrl"
import { ROLE_CODE } from "../../../constant/RoleCode"
import { ApiService } from "../../../service/api.service"

@Component({
    selector: 'profile-show',
    templateUrl: './profile-show.component.html'
})
export class ProfileShowComponent implements OnInit, OnDestroy {
    fileDownload = `${BASE_URL}/files/download/`
    fullname: string | null = ''
    email: string | null = ''
    roleCode: string | null = ''
    roleName: string | null = ''
    photoId: number | null = 1

    constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService) { }

    ngOnInit(): void {
        if (this.apiService.getFullname()) {
            this.fullname = this.apiService.getFullname()
        }
        if (this.apiService.getEmail()) {
            this.email = this.apiService.getEmail()
        }
        if (this.apiService.getPhotoId()) {
            this.photoId = this.apiService.getPhotoId()
        }
        this.roleCode = this.apiService.getRoleCode()
        if (this.roleCode == ROLE_CODE.NA) {
            this.roleName = 'non-admin'
        } else {
            this.roleName = 'super-admin'
        }
    }

    ngOnDestroy(): void {
    }
}