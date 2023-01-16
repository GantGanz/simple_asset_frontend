export class CheckOutDetailDataDto {
    private _checkOutDetailId!: number
    private _version!: number
    private _trxCode!: string
    private _assetName!: string
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

    public get trxCode(): string {
        return this._trxCode
    }

    public set trxCode(trxCode: string) {
        this._trxCode = trxCode
    }

    public set checkOutDetailId(checkOutDetailId: number) {
        this._checkOutDetailId = checkOutDetailId
    }

    public get checkOutDetailId(): number {
        return this._checkOutDetailId
    }

    public set version(version: number) {
        this._version = version
    }

    public get version(): number {
        return this._version
    }
}