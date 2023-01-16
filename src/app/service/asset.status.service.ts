import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { BASE_URL } from "../constant/BaseUrl"
import { AssetStatusesDto } from "../dto/asset-status/asset.statuses.dto"

@Injectable({
    providedIn: 'root'
})
export class AssetStatusService {

    constructor(private http: HttpClient) { }

    getAll(): Observable<AssetStatusesDto> {
        return this.http.get<AssetStatusesDto>(`${BASE_URL}/asset-statuses`)
    }
}