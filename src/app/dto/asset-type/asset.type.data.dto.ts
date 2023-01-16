export class AssetTypeDataDto {
    private _assetTypeId!: number
    private _version!: number
    private _assetTypeName!: string
    private _assetTypeCode!: string

    public get assetTypeName(): string {
        return this._assetTypeName
    }

    public set assetTypeName(assetTypeName: string
    ) {
        this._assetTypeName = assetTypeName
    }

    public get assetTypeCode(): string {
        return this._assetTypeCode
    }

    public set assetTypeCode(assetTypeCode: string) {
        this._assetTypeCode = assetTypeCode
    }

    public set assetTypeId(assetTypeId: number) {
        this._assetTypeId = assetTypeId
    }

    public get assetTypeId(): number {
        return this._assetTypeId
    }

    public set version(version: number) {
        this._version = version
    }

    public get version(): number {
        return this._version
    }

}