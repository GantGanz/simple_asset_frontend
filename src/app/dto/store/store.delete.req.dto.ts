export class StoreDeleteReqDto {
    private storeId!: number

    public set _storeId(storeId: number) {
        this.storeId = storeId
    }

    public get _storeId(): number {
        return this.storeId
    }
}