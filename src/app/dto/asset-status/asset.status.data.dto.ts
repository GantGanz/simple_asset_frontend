export class AssetStatusDataDto {
    private _assetStatusId!: number
    private _version!: number
    private _assetStatusName!: string
    private _assetStatusCode!: string

    public get assetStatusName(): string {
        return this._assetStatusName
    }

    public set assetStatusName(assetStatusName: string
    ) {
        this._assetStatusName = assetStatusName
    }

    public get assetStatusCode(): string {
        return this._assetStatusCode
    }

    public set assetStatusCode(assetStatusCode: string) {
        this._assetStatusCode = assetStatusCode
    }

    public set assetStatusId(assetStatusId: number) {
        this._assetStatusId = assetStatusId
    }

    public get assetStatusId(): number {
        return this._assetStatusId
    }

    public set version(version: number) {
        this._version = version
    }

    public get version(): number {
        return this._version
    }

}