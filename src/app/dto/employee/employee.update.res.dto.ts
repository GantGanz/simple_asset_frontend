import { EmployeeUpdateReqDto } from "./employee.update.req.dto"

export class EmployeeUpdateResDto {
    private _data!: EmployeeUpdateReqDto
    private _message!: string

    public set message(message: string) {
        this._message = message
    }

    public get message(): string {
        return this._message
    }

    public set data(data: EmployeeUpdateReqDto) {
        this._data = data
    }

    public get data(): EmployeeUpdateReqDto {
        return this._data
    }
}