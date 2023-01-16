import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { BASE_URL } from "../constant/BaseUrl"
import { CheckOutDataDto } from "../dto/check-out/check.out.data.dto"
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

    getById(id: number): Observable<CheckOutDataDto> {
        return this.http.get<CheckOutDataDto>(`${BASE_URL}/check-outs/${id}`)
    }

    insertCheckOut(data: CheckOutInsertReqDto): Observable<CheckOutInsertResDto> {
        return this.http.post<CheckOutInsertResDto>(`${BASE_URL}/check-outs`, data)
    }
}