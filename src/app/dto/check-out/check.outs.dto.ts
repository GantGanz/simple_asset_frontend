import { CheckOutDataDto } from "./check.out.data.dto"

export class CheckOutsDto {
    private _data!: CheckOutDataDto[]

    public set data(data: CheckOutDataDto[]) {
        this._data = data
    }

    public get data(): CheckOutDataDto[] {
        return this._data
    }
}