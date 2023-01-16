import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { BASE_URL } from "../constant/BaseUrl"
import { CheckOutDetailDataResDto } from "../dto/check-out-detail/check.out.detail.data.res.dto"
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

    getById(id: number): Observable<CheckOutDetailDataResDto> {
        return this.http.get<CheckOutDetailDataResDto>(`${BASE_URL}/check-outs/${id}`)
    }
}