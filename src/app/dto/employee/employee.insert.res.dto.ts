import { EmployeeInsertDataResDto } from "./employee.insert.data.res.dto"

export class EmployeeInsertResDto {
    private _data!: EmployeeInsertDataResDto
    private _message!: string

    public set message(message: string) {
        this._message = message
    }

    public get message(): string {
        return this._message
    }

    public set data(data: EmployeeInsertDataResDto) {
        this._data = data
    }

    public get data(): EmployeeInsertDataResDto {
        return this._data
    }
}