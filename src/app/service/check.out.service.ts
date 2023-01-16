import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { BASE_URL } from "../constant/BaseUrl"
import { CheckOutDataResDto } from "../dto/check-out/check.out.data.res.dto"
import { CheckOutInsertReqDto } from "../dto/check-out/check.out.insert.req.dto"
import { CheckOutInsertResDto } from "../dto/check-out/check.out.insert.res.dto"
import { CheckOutsDto } from "../dto/check-out/check.outs.dto"

@Injectable({
    providedIn: 'root'
})
export class CheckOutService {

    constructor(private http: HttpClient) { }

    getAll(): Observable<CheckOutsDto> {
        return this.http.get<CheckOutsDto>(`${BASE_URL}/check-outs`)
    }

    getAllUnchecked(): Observable<CheckOutsDto> {
        return this.http.get<CheckOutsDto>(`${BASE_URL}/check-outs/unchecked`)
    }

    getById(id: number): Observable<CheckOutDataResDto> {
        return this.http.get<CheckOutDataResDto>(`${BASE_URL}/check-outs/${id}`)
    }

    insertCheckOut(data: CheckOutInsertReqDto): Observable<CheckOutInsertResDto> {
        return this.http.post<CheckOutInsertResDto>(`${BASE_URL}/check-outs`, data)
    }
}