import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { BASE_URL } from "../constant/BaseUrl"
import { CompaniesDto } from "../dto/company/companies.dto"
import { CompanyDataDto } from "../dto/company/company.data.dto"
import { CompanyInsertDataResDto } from "../dto/company/company.insert.data.res.dto"
import { CompanyInsertReqDto } from "../dto/company/company.insert.req.dto"
import { CompanyUpdateReqDto } from "../dto/company/company.update.req.dto"
import { CompanyUpdateResDto } from "../dto/company/company.update.res.dto"

@Injectable({
    providedIn: 'root'
})
export class CompanyService {

    constructor(private http: HttpClient) { }

    getAll(): Observable<CompaniesDto> {
        return this.http.get<CompaniesDto>(`${BASE_URL}/companies`)
    }

    insertCompany(data: CompanyInsertReqDto): Observable<CompanyInsertDataResDto> {
        return this.http.post<CompanyInsertDataResDto>(`${BASE_URL}/companies`, data)
    }

    getById(id: number): Observable<CompanyDataDto> {
        return this.http.get<CompanyDataDto>(`${BASE_URL}/companies/${id}`)
    }

    updateCompany(data: CompanyUpdateReqDto): Observable<CompanyUpdateResDto> {
        return this.http.put<CompanyUpdateResDto>(`${BASE_URL}/companies`, data)
    }

    delete(id: number): Observable<CompanyDataDto> {
        return this.http.delete<CompanyDataDto>(`${BASE_URL}/companies/${id}`)
    }
}