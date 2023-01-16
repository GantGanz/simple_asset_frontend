import { CompanyDataDto } from "./company.data.dto"

export class CompanyDataResDto {
    private _data!: CompanyDataDto

    public set data(data: CompanyDataDto) {
        this._data = data
    }

    public get data(): CompanyDataDto {
        return this._data
    }
}