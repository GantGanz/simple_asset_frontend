import { CheckOutInsertDataResDto } from "./check.out.insert.data.res.dto"

export class CheckOutInsertResDto {
    private _data!: CheckOutInsertDataResDto
    private _message!: string

    public set message(message: string) {
        this._message = message
    }

    public get message(): string {
        return this._message
    }

    public set data(data: CheckOutInsertDataResDto) {
        this._data = data
    }

    public get data(): CheckOutInsertDataResDto {
        return this._data
    }
}