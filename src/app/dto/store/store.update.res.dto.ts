import { StoreUpdateReqDto } from "./store.update.req.dto"

export class StoreUpdateResDto {
    private _data!: StoreUpdateReqDto
    private _message!: string

    public set message(message: string) {
        this._message = message
    }

    public get message(): string {
        return this._message
    }

    public set data(data: StoreUpdateReqDto) {
        this._data = data
    }

    public get data(): StoreUpdateReqDto {
        return this._data
    }
}