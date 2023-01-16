export class AssetDeleteReqDto {
    private assetId!: number

    public set _assetId(assetId: number) {
        this.assetId = assetId
    }

    public get _assetId(): number {
        return this.assetId
    }
}