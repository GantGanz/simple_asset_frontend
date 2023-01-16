import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { BASE_URL } from "../constant/BaseUrl"
import { UserDataDto } from "../dto/user/user.data.dto"
import { UserDataResDto } from "../dto/user/user.data.res.dto"
import { UserInsertDataResDto } from "../dto/user/user.insert.data.res.dto"
import { UserInsertReqDto } from "../dto/user/user.insert.req.dto"
import { UserUpdatePasswordReqDto } from "../dto/user/user.update.password.req.dto"
import { UserUpdatePasswordResDto } from "../dto/user/user.update.password.res.dto"
import { UserUpdateReqDto } from "../dto/user/user.update.req.dto"
import { UserUpdateResDto } from "../dto/user/user.update.res.dto"
import { UsersDto } from "../dto/user/users.dto"

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) { }

    getAll(): Observable<UsersDto> {
        return this.http.get<UsersDto>(`${BASE_URL}/users`)
    }

    insertUser(data: UserInsertReqDto): Observable<UserInsertDataResDto> {
        return this.http.post<UserInsertDataResDto>(`${BASE_URL}/users`, data)
    }

    getById(id: number): Observable<UserDataResDto> {
        return this.http.get<UserDataResDto>(`${BASE_URL}/users/${id}`)
    }

    updateUser(data: UserUpdateReqDto): Observable<UserUpdateResDto> {
        return this.http.put<UserUpdateResDto>(`${BASE_URL}/users`, data)
    }

    updatePasswordUser(data: UserUpdatePasswordReqDto): Observable<UserUpdatePasswordResDto> {
        return this.http.patch<UserUpdatePasswordResDto>(`${BASE_URL}/users/password`, data)
    }

    delete(id: number): Observable<UserDataDto> {
        return this.http.delete<UserDataDto>(`${BASE_URL}/users/${id}`)
    }
}