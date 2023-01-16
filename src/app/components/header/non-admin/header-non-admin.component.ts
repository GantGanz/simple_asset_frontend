import { Component, OnDestroy, OnInit } from "@angular/core"
import { ActivatedRoute } from "@angular/router"
import { BASE_URL } from "../../../constant/BaseUrl"
import { ApiService } from "../../../service/api.service"

@Component({
    selector: 'header-non-admin',
    templateUrl: './header-non-admin.component.html'
})
export class HeaderNonAdminComponent implements OnInit, OnDestroy {
    fileDownload = `${BASE_URL}/files/download/`
    fullname: string | null = ''
    email: string | null = ''
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
    }

    logout() {
        this.apiService.logout()
    }

    ngOnDestroy(): void { }
}