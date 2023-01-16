import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { BASE_URL } from "../constant/BaseUrl"
import { StoreDataDto } from "../dto/store/store.data.dto"
import { StoreInsertDataResDto } from "../dto/store/store.insert.data.res.dto"
import { StoreInsertReqDto } from "../dto/store/store.insert.req.dto"
import { StoreUpdateReqDto } from "../dto/store/store.update.req.dto"
import { StoreUpdateResDto } from "../dto/store/store.update.res.dto"
import { StoresDto } from "../dto/store/stores.dto"

@Injectable({
    providedIn: 'root'
})
export class StoreService {

    constructor(private http: HttpClient) { }

    getAll(): Observable<StoresDto> {
        return this.http.get<StoresDto>(`${BASE_URL}/stores`)
    }

    insertStore(data: StoreInsertReqDto): Observable<StoreInsertDataResDto> {
        return this.http.post<StoreInsertDataResDto>(`${BASE_URL}/stores`, data)
    }

    getById(id: number): Observable<StoreDataDto> {
        return this.http.get<StoreDataDto>(`${BASE_URL}/stores/${id}`)
    }

    updateStore(data: StoreUpdateReqDto): Observable<StoreUpdateResDto> {
        return this.http.put<StoreUpdateResDto>(`${BASE_URL}/stores`, data)
    }

    delete(id: number): Observable<StoreDataDto> {
        return this.http.delete<StoreDataDto>(`${BASE_URL}/stores/${id}`)
    }
}