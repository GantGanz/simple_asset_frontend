import { ProviderDataDto } from "./provider.data.dto"

export class ProviderDataResDto {
    private _data!: ProviderDataDto

    public set data(data: ProviderDataDto) {
        this._data = data
    }

    public get data(): ProviderDataDto {
        return this._data
    }
}