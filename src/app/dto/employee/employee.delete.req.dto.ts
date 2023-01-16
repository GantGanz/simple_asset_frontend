export class EmployeeDeleteReqDto {
    private employeeId!: number

    public set _employeeId(employeeId: number) {
        this.employeeId = employeeId
    }

    public get _employeeId(): number {
        return this.employeeId
    }
}