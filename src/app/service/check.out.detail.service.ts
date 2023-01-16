import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { BASE_URL } from "../constant/BaseUrl"
import { CheckOutDetailDataDto } from "../dto/check-out-detail/check.out.detail.data.dto"
import { CheckOutDetailInsertDataResDto } from "../dto/check-out-detail/check.out.detail.insert.data.res.dto"
import { CheckOutDetailInsertReqDto } from "../dto/check-out-detail/check.out.detail.insert.req.dto"
import { CheckOutDetailsDto } from "../dto/check-out-detail/check.out.details.dto"

@Injectable({
    providedIn: 'root'
})
export class CheckOutDetailService {

    constructor(private http: HttpClient) { }

    getAllById(id: number): Observable<CheckOutDetailsDto> {
        return this.http.get<CheckOutDetailsDto>(`${BASE_URL}/check-outs/all-by-id/${id}`)
    }

    getAllNotCheckIn(): Observable<CheckOutDetailsDto> {
        return this.http.get<CheckOutDetailsDto>(`${BASE_URL}/check-outs/all-not-check-in`)
    }

    getAllNotCheckInById(id: number): Observable<CheckOutDetailsDto> {
        return this.http.get<CheckOutDetailsDto>(`${BASE_URL}/check-outs/all-not-check-in-by-id/${id}`)
    }

    getById(id: number): Observable<CheckOutDetailDataDto> {
        return this.http.get<CheckOutDetailDataDto>(`${BASE_URL}/check-outs/${id}`)
    }
}