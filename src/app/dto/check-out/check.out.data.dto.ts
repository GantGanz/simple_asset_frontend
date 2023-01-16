export class CheckOutDataDto {
    private _checkOutId!: number
    private _version!: number
    private _trxCode!: string
    private _checkOutTime!: string
    private _checkOutLocation!: string
    private _assetGeneralName!: string
    private _employeeName!: string

    public get trxCode(): string {
        return this._trxCode
    }

    public set trxCode(trxCode: string) {
        this._trxCode = trxCode
    }

    public get checkOutTime(): string {
        return this._checkOutTime
    }

    public set checkOutTime(checkOutTime: string) {
        this._checkOutTime = checkOutTime
    }

    public get checkOutLocation(): string {
        return this._checkOutLocation
    }

    public set checkOutLocation(checkOutLocation: string) {
        this._checkOutLocation = checkOutLocation
    }

    public get assetGeneralName(): string {
        return this._assetGeneralName
    }

    public set assetGeneralName(assetGeneralName: string) {
        this._assetGeneralName = assetGeneralName
    }

    public get employeeName(): string {
        return this._employeeName
    }

    public set employeeName(employeeName: string) {
        this._employeeName = employeeName
    }


    public set checkOutId(checkOutId: number) {
        this._checkOutId = checkOutId
    }

    public get checkOutId(): number {
        return this._checkOutId
    }

    public set version(version: number) {
        this._version = version
    }

    public get version(): number {
        return this._version
    }

}