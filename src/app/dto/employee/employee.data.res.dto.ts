import { EmployeeDataDto } from "./employee.data.dto"

export class EmployeeDataResDto {
    private _data!: EmployeeDataDto

    public set data(data: EmployeeDataDto) {
        this._data = data
    }

    public get data(): EmployeeDataDto {
        return this._data
    }
}