import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { BASE_URL } from "../constant/BaseUrl"
import { EmployeeDataDto } from "../dto/employee/employee.data.dto"
import { EmployeeDataResDto } from "../dto/employee/employee.data.res.dto"
import { EmployeeInsertDataResDto } from "../dto/employee/employee.insert.data.res.dto"
import { EmployeeInsertReqDto } from "../dto/employee/employee.insert.req.dto"
import { EmployeeUpdateReqDto } from "../dto/employee/employee.update.req.dto"
import { EmployeeUpdateResDto } from "../dto/employee/employee.update.res.dto"
import { EmployeesDto } from "../dto/employee/employees.dto"

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {

    constructor(private http: HttpClient) { }

    getAll(): Observable<EmployeesDto> {
        return this.http.get<EmployeesDto>(`${BASE_URL}/employees`)
    }

    insertEmployee(data: EmployeeInsertReqDto): Observable<EmployeeInsertDataResDto> {
        return this.http.post<EmployeeInsertDataResDto>(`${BASE_URL}/employees`, data)
    }

    getById(id: number): Observable<EmployeeDataResDto> {
        return this.http.get<EmployeeDataResDto>(`${BASE_URL}/employees/${id}`)
    }

    updateEmployee(data: EmployeeUpdateReqDto): Observable<EmployeeUpdateResDto> {
        return this.http.put<EmployeeUpdateResDto>(`${BASE_URL}/employees`, data)
    }

    delete(id: number): Observable<EmployeeDataDto> {
        return this.http.delete<EmployeeDataDto>(`${BASE_URL}/employees/${id}`)
    }
}