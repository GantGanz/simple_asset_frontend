import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { BASE_URL } from "../constant/BaseUrl"
import { AssetDataDto } from "../dto/asset/asset.data.dto"
import { AssetInsertDataResDto } from "../dto/asset/asset.insert.data.res.dto"
import { AssetInsertReqDto } from "../dto/asset/asset.insert.req.dto"
import { AssetUpdateReqDto } from "../dto/asset/asset.update.req.dto"
import { AssetUpdateResDto } from "../dto/asset/asset.update.res.dto"
import { AssetsDto } from "../dto/asset/assets.dto"

@Injectable({
    providedIn: 'root'
})
export class AssetService {

    constructor(private http: HttpClient) { }

    getAll(): Observable<AssetsDto> {
        return this.http.get<AssetsDto>(`${BASE_URL}/assets`)
    }

    getAllDeployable(): Observable<AssetsDto> {
        return this.http.get<AssetsDto>(`${BASE_URL}/assets/deployables`)
    }

    getAllDeployableGeneral(): Observable<AssetsDto> {
        return this.http.get<AssetsDto>(`${BASE_URL}/assets/deployable-generals`)
    }

    getAllDeployableComponent(): Observable<AssetsDto> {
        return this.http.get<AssetsDto>(`${BASE_URL}/assets/deployable-components`)
    }

    insertAsset(data: AssetInsertReqDto): Observable<AssetInsertDataResDto> {
        return this.http.post<AssetInsertDataResDto>(`${BASE_URL}/assets`, data)
    }

    getById(id: number): Observable<AssetDataDto> {
        return this.http.get<AssetDataDto>(`${BASE_URL}/assets/${id}`)
    }

    updateAsset(data: AssetUpdateReqDto): Observable<AssetUpdateResDto> {
        return this.http.put<AssetUpdateResDto>(`${BASE_URL}/assets`, data)
    }

    delete(id: number): Observable<AssetDataDto> {
        return this.http.delete<AssetDataDto>(`${BASE_URL}/assets/${id}`)
    }
}