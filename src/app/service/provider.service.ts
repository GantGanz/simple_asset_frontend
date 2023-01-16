import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { BASE_URL } from "../constant/BaseUrl"
import { ProviderDataDto } from "../dto/provider/provider.data.dto"
import { ProviderInsertDataResDto } from "../dto/provider/provider.insert.data.res.dto"
import { ProviderInsertReqDto } from "../dto/provider/provider.insert.req.dto"
import { ProviderUpdateReqDto } from "../dto/provider/provider.update.req.dto"
import { ProviderUpdateResDto } from "../dto/provider/provider.update.res.dto"
import { ProvidersDto } from "../dto/provider/providers.dto"

@Injectable({
    providedIn: 'root'
})
export class ProviderService {

    constructor(private http: HttpClient) { }

    getAll(): Observable<ProvidersDto> {
        return this.http.get<ProvidersDto>(`${BASE_URL}/providers`)
    }

    insertProvider(data: ProviderInsertReqDto): Observable<ProviderInsertDataResDto> {
        return this.http.post<ProviderInsertDataResDto>(`${BASE_URL}/providers`, data)
    }

    getById(id: number): Observable<ProviderDataDto> {
        return this.http.get<ProviderDataDto>(`${BASE_URL}/providers/${id}`)
    }

    updateProvider(data: ProviderUpdateReqDto): Observable<ProviderUpdateResDto> {
        return this.http.put<ProviderUpdateResDto>(`${BASE_URL}/providers`, data)
    }

    delete(id: number): Observable<ProviderDataDto> {
        return this.http.delete<ProviderDataDto>(`${BASE_URL}/providers/${id}`)
    }
}