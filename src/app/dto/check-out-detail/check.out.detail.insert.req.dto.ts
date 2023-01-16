export class CheckOutDetailInsertReqDto {
    private trxCode!: string
    private assetId!: number
    private returnDate!: string

    public set _trxCode(trxCode: string) {
        this.trxCode = trxCode
    }

    public get _trxCode(): string {
        return this.trxCode
    }

    public set _returnDate(returnDate: string) {
        this.returnDate = returnDate
    }

    public get _returnDate(): string {
        return this.returnDate
    }

    public set _assetId(assetId: number) {
        this.assetId = assetId
    }

    public get _assetId(): number {
        return this.assetId
    }
}