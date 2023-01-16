import { CheckInDetailDataDto } from "./check.in.detail.data.dto"

export class CheckInDetailsDto {
    private _data!: CheckInDetailDataDto[]

    public set data(data: CheckInDetailDataDto[]) {
        this._data = data
    }

    public get data(): CheckInDetailDataDto[] {
        return this._data
    }
}