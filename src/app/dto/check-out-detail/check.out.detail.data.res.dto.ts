import { CheckOutDetailDataDto } from "./check.out.detail.data.dto"

export class CheckOutDetailDataResDto {
    private _data!: CheckOutDetailDataDto

    public set data(data: CheckOutDetailDataDto) {
        this._data = data
    }

    public get data(): CheckOutDetailDataDto {
        return this._data
    }
}