import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { BASE_URL } from "../constant/BaseUrl"
import { CheckInDetailDataDto } from "../dto/check-in-detail/check.in.detail.data.dto"
import { CheckInDetailInsertDataResDto } from "../dto/check-in-detail/check.in.detail.insert.data.res.dto"
import { CheckInDetailInsertReqDto } from "../dto/check-in-detail/check.in.detail.insert.req.dto"
import { CheckInDetailsDto } from "../dto/check-in-detail/check.in.details.dto"

@Injectable({
    providedIn: 'root'
})
export class CheckInDetailService {

    constructor(private http: HttpClient) { }

    getAllById(id: number): Observable<CheckInDetailsDto> {
        return this.http.get<CheckInDetailsDto>(`${BASE_URL}/check-ins/all-by-id/${id}`)
    }

    insertCheckIn(data: CheckInDetailInsertReqDto): Observable<CheckInDetailInsertDataResDto> {
        return this.http.post<CheckInDetailInsertDataResDto>(`${BASE_URL}/check-ins`, data)
    }

    getById(id: number): Observable<CheckInDetailDataDto> {
        return this.http.get<CheckInDetailDataDto>(`${BASE_URL}/check-ins/${id}`)
    }
}