import { AssetDataDto } from "./asset.data.dto"

export class AssetsDto {
    private _data!: AssetDataDto[]

    public set data(data: AssetDataDto[]) {
        this._data = data
    }

    public get data(): AssetDataDto[] {
        return this._data
    }
}