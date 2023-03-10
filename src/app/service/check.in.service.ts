import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { BASE_URL } from "../constant/BaseUrl"
import { CheckInDataResDto } from "../dto/check-in/check.in.data.res.dto"
import { CheckInInsertDataResDto } from "../dto/check-in/check.in.insert.data.res.dto"
import { CheckInInsertReqDto } from "../dto/check-in/check.in.insert.req.dto"
import { CheckInsDto } from "../dto/check-in/check.ins.dto"

@Injectable({
    providedIn: 'root'
})
export class CheckInService {

    constructor(private http: HttpClient) { }

    getAll(): Observable<CheckInsDto> {
        return this.http.get<CheckInsDto>(`${BASE_URL}/check-ins`)
    }

    insertCheckIn(data: CheckInInsertReqDto): Observable<CheckInInsertDataResDto> {
        return this.http.post<CheckInInsertDataResDto>(`${BASE_URL}/check-ins`, data)
    }

    getById(id: number): Observable<CheckInDataResDto> {
        return this.http.get<CheckInDataResDto>(`${BASE_URL}/check-ins/${id}`)
    }
}