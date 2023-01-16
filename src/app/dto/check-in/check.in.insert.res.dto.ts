import { CheckInInsertDataResDto } from "./check.in.insert.data.res.dto"

export class CheckInInsertResDto {
    private _data!: CheckInInsertDataResDto
    private _message!: string

    public set message(message: string) {
        this._message = message
    }

    public get message(): string {
        return this._message
    }

    public set data(data: CheckInInsertDataResDto) {
        this._data = data
    }

    public get data(): CheckInInsertDataResDto {
        return this._data
    }
}