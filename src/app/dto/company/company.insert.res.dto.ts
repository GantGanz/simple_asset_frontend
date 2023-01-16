import { CompanyInsertDataResDto } from "./company.insert.data.res.dto"

export class CompanyInsertResDto {
    private _data!: CompanyInsertDataResDto
    private _message!: string

    public set message(message: string) {
        this._message = message
    }

    public get message(): string {
        return this._message
    }

    public set data(data: CompanyInsertDataResDto) {
        this._data = data
    }

    public get data(): CompanyInsertDataResDto {
        return this._data
    }
}