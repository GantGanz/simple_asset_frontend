import { CheckOutDetailInsertDataResDto } from "./check.out.detail.insert.data.res.dto"

export class CheckOutDetailInsertResDto {
    private _data!: CheckOutDetailInsertDataResDto
    private _message!: string

    public set message(message: string) {
        this._message = message
    }

    public get message(): string {
        return this._message
    }

    public set data(data: CheckOutDetailInsertDataResDto) {
        this._data = data
    }

    public get data(): CheckOutDetailInsertDataResDto {
        return this._data
    }
}