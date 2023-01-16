import { StoreInsertDataResDto } from "./store.insert.data.res.dto"

export class StoreInsertResDto {
    private _data!: StoreInsertDataResDto
    private _message!: string

    public set message(message: string) {
        this._message = message
    }

    public get message(): string {
        return this._message
    }

    public set data(data: StoreInsertDataResDto) {
        this._data = data
    }

    public get data(): StoreInsertDataResDto {
        return this._data
    }
}