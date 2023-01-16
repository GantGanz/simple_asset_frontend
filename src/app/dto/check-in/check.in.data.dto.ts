export class CheckInDataDto {
    private _checkInId!: number
    private _version!: number
    private _trxCode!: string
    private _checkOutTime!: string
    private _createdAt!: string
    private _updatedAt!: string
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

    public get createdAt(): string {
        return this._createdAt
    }

    public set createdAt(createdAt: string) {
        this._createdAt = createdAt
    }

    public get updatedAt(): string {
        return this._updatedAt
    }

    public set updatedAt(updatedAt: string) {
        this._updatedAt = updatedAt
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


    public set checkInId(checkInId: number) {
        this._checkInId = checkInId
    }

    public get checkInId(): number {
        return this._checkInId
    }

    public set version(version: number) {
        this._version = version
    }

    public get version(): number {
        return this._version
    }

}