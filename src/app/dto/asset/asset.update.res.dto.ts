import { AssetUpdateReqDto } from "./asset.update.req.dto"

export class AssetUpdateResDto {
    private _data!: AssetUpdateReqDto
    private _message!: string

    public set message(message: string) {
        this._message = message
    }

    public get message(): string {
        return this._message
    }

    public set data(data: AssetUpdateReqDto) {
        this._data = data
    }

    public get data(): AssetUpdateReqDto {
        return this._data
    }
}