export class EmployeeUpdateReqDto {
    private employeeId!: number
    private version!: number
    private employeeName!: string
    private employeeCode!: string
    private isActive!: boolean

    public set _employeeName(employeeName: string) {
        this.employeeName = employeeName
    }

    public get _employeeName(): string {
        return this.employeeName
    }

    public set _isActive(isActive: boolean) {
        this.isActive = isActive
    }

    public get _isActive(): boolean {
        return this.isActive
    }

    public set _employeeCode(employeeCode: string) {
        this.employeeCode = employeeCode
    }

    public get _employeeCode(): string {
        return this.employeeCode
    }

    public set _version(version: number) {
        this.version = version
    }

    public get _version(): number {
        return this.version
    }

    public set _employeeId(employeeId: number) {
        this.employeeId = employeeId
    }

    public get _employeeId(): number {
        return this.employeeId
    }
}