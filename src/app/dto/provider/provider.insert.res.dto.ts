import { ProviderInsertDataResDto } from "./provider.insert.data.res.dto"

export class ProviderInsertResDto {
    private _data!: ProviderInsertDataResDto
    private _message!: string

    public set message(message: string) {
        this._message = message
    }

    public get message(): string {
        return this._message
    }

    public set data(data: ProviderInsertDataResDto) {
        this._data = data
    }

    public get data(): ProviderInsertDataResDto {
        return this._data
    }
}