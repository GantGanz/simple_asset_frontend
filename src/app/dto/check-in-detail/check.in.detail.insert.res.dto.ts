import { CheckInDetailInsertDataResDto } from "./check.in.detail.insert.data.res.dto"

export class CheckInDetailInsertResDto {
    private _data!: CheckInDetailInsertDataResDto
    private _message!: string

    public set message(message: string) {
        this._message = message
    }

    public get message(): string {
        return this._message
    }

    public set data(data: CheckInDetailInsertDataResDto) {
        this._data = data
    }

    public get data(): CheckInDetailInsertDataResDto {
        return this._data
    }
}