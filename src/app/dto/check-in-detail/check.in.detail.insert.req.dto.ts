export class CheckInDetailInsertReqDto {
    private checkInId!: number
    private checkOutDetailId!: number
    private assetStatusId!: number

    public set _checkInId(checkInId: number) {
        this.checkInId = checkInId
    }

    public get _checkInId(): number {
        return this.checkInId
    }

    public set _assetStatusId(assetStatusId: number) {
        this.assetStatusId = assetStatusId
    }

    public get _assetStatusId(): number {
        return this.assetStatusId
    }

    public set _checkOutDetailId(checkOutDetailId: number) {
        this.checkOutDetailId = checkOutDetailId
    }

    public get _checkOutDetailId(): number {
        return this.checkOutDetailId
    }
}