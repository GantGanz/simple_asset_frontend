import { AssetInsertDataResDto } from "./asset.insert.data.res.dto"

export class AssetInsertResDto {
    private _data!: AssetInsertDataResDto
    private _message!: string

    public set message(message: string) {
        this._message = message
    }

    public get message(): string {
        return this._message
    }

    public set data(data: AssetInsertDataResDto) {
        this._data = data
    }

    public get data(): AssetInsertDataResDto {
        return this._data
    }
}