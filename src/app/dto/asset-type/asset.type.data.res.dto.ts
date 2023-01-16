import { AssetTypeDataDto } from "./asset.type.data.dto"

export class AssetTypeDataResDto {
    private _data!: AssetTypeDataDto

    public set data(data: AssetTypeDataDto) {
        this._data = data
    }

    public get data(): AssetTypeDataDto {
        return this._data
    }
}