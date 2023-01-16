import { CheckInDataDto } from "./check.in.data.dto"

export class CheckInsDto {
    private _data!: CheckInDataDto[]

    public set data(data: CheckInDataDto[]) {
        this._data = data
    }

    public get data(): CheckInDataDto[] {
        return this._data
    }
}