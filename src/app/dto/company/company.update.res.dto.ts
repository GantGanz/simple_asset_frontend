import { CompanyUpdateReqDto } from "./company.update.req.dto"

export class CompanyUpdateResDto {
    private _data!: CompanyUpdateReqDto
    private _message!: string

    public set message(message: string) {
        this._message = message
    }

    public get message(): string {
        return this._message
    }

    public set data(data: CompanyUpdateReqDto) {
        this._data = data
    }

    public get data(): CompanyUpdateReqDto {
        return this._data
    }
}