import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { BASE_URL } from "../constant/BaseUrl"
import { AssetTypesDto } from "../dto/asset-type/asset.types.dto"

@Injectable({
    providedIn: 'root'
})
export class AssetTypeService {

    constructor(private http: HttpClient) { }

    getAll(): Observable<AssetTypesDto> {
        return this.http.get<AssetTypesDto>(`${BASE_URL}/asset-types`)
    }
}