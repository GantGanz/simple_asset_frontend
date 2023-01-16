import { AssetStatusDataDto } from "./asset.status.data.dto"

export class AssetStatusDataResDto {
    private _data!: AssetStatusDataDto

    public set data(data: AssetStatusDataDto) {
        this._data = data
    }

    public get data(): AssetStatusDataDto {
        return this._data
    }
}