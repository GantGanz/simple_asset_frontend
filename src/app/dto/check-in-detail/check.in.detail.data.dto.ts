export class CheckInDetailDataDto {
    private _checkInDetailId!: number
    private _version!: number
    private _trxCode!: string
    private _assetName!: string
    private _assetStatus!: string
    private _checkInTime!: string
    private _returnDate!: string

    public get assetName(): string {
        return this._assetName
    }

    public set assetName(assetName: string
    ) {
        this._assetName = assetName
    }

    public get returnDate(): string {
        return this._returnDate
    }

    public set returnDate(returnDate: string
    ) {
        this._returnDate = returnDate
    }

    public get checkInTime(): string {
        return this._checkInTime
    }

    public set checkInTime(checkInTime: string
    ) {
        this._checkInTime = checkInTime
    }

    public get assetStatus(): string {
        return this._assetStatus
    }

    public set assetStatus(assetStatus: string
    ) {
        this._assetStatus = assetStatus
    }

    public get trxCode(): string {
        return this._trxCode
    }

    public set trxCode(trxCode: string) {
        this._trxCode = trxCode
    }

    public set checkInDetailId(checkInDetailId: number) {
        this._checkInDetailId = checkInDetailId
    }

    public get checkInDetailId(): number {
        return this._checkInDetailId
    }

    public set version(version: number) {
        this._version = version
    }

    public get version(): number {
        return this._version
    }
}