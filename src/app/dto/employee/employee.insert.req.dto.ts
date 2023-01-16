export class EmployeeInsertReqDto {
    private employeeName!: string
    private employeeCode!: string

    public set _employeeName(employeeName: string) {
        this.employeeName = employeeName
    }

    public get _employeeName(): string {
        return this.employeeName
    }

    public set _employeeCode(employeeCode: string) {
        this.employeeCode = employeeCode
    }

    public get _employeeCode(): string {
        return this.employeeCode
    }

}