import { ProviderUpdateReqDto } from "./provider.update.req.dto"

export class ProviderUpdateResDto {
    private _data!: ProviderUpdateReqDto
    private _message!: string

    public set message(message: string) {
        this._message = message
    }

    public get message(): string {
        return this._message
    }

    public set data(data: ProviderUpdateReqDto) {
        this._data = data
    }

    public get data(): ProviderUpdateReqDto {
        return this._data
    }
}