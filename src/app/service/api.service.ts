import { Injectable } from "@angular/core"
import { Router } from "@angular/router"
import { LoginResDto } from "../dto/login/login.res.dto"

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private router: Router) {

    }
    saveData(data: LoginResDto): void {
        localStorage.setItem('data', JSON.stringify(data))
    }

    getData(): string | null {
        const data = localStorage.getItem('data')
        let result: null | string = ''
        if (data) {
            result = JSON.parse(data).token
        }
        return result
    }

    getRoleCode(): string | null {
        const data = localStorage.getItem('data')
        let result: null | string = ''
        if (data) {
            result = JSON.parse(data).roleCode
        }
        return result
    }

    getFullname(): string | null {
        const data = localStorage.getItem('data')
        let result: null | string = ''
        if (data) {
            result = JSON.parse(data).fullname
        }
        return result
    }

    getEmail(): string | null {
        const data = localStorage.getItem('data')
        let result: null | string = ''
        if (data) {
            result = JSON.parse(data).email
        }
        return result
    }

    getId(): number {
        const data = localStorage.getItem('data')
        let result: number = 1
        if (data) {
            result = JSON.parse(data).id
        }
        return result
    }

    getPhotoId(): number | null {
        const data = localStorage.getItem('data')
        let result: null | number = 1
        if (data) {
            result = JSON.parse(data).photoId
        }
        return result
    }

    logout() {
        localStorage.clear()
        this.router.navigateByUrl('/login')
    }
}