import { StoreDataDto } from "./store.data.dto"

export class StoreDataResDto {
    private _data!: StoreDataDto

    public set data(data: StoreDataDto) {
        this._data = data
    }

    public get data(): StoreDataDto {
        return this._data
    }
}