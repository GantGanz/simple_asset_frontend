export class EmployeeDataDto {
    private _employeeId!: number
    private _version!: number
    private _employeeName!: string
    private _employeeCode!: string
    private _isActive!: boolean

    public get employeeName(): string {
        return this._employeeName
    }

    public set employeeName(employeeName: string
    ) {
        this._employeeName = employeeName
    }

    public get employeeCode(): string {
        return this._employeeCode
    }

    public set employeeCode(employeeCode: string) {
        this._employeeCode = employeeCode
    }

    public get isActive(): boolean {
        return this._isActive
    }

    public set isActive(isActive: boolean) {
        this._isActive = isActive
    }

    public set employeeId(employeeId: number) {
        this._employeeId = employeeId
    }

    public get employeeId(): number {
        return this._employeeId
    }

    public set version(version: number) {
        this._version = version
    }

    public get version(): number {
        return this._version
    }

}