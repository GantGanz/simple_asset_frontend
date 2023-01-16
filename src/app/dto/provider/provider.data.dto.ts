export class ProviderDataDto {
    private _providerId!: number
    private _storeId!: number
    private _version!: number
    private _providerName!: string
    private _providerCode!: string
    private _storeName!: string
    private _fileId!: number
    private _isActive!: boolean

    public get providerName(): string {
        return this._providerName
    }

    public set providerName(providerName: string
    ) {
        this._providerName = providerName
    }

    public get storeName(): string {
        return this._storeName
    }

    public set storeName(storeName: string
    ) {
        this._storeName = storeName
    }

    public get providerCode(): string {
        return this._providerCode
    }

    public set providerCode(providerCode: string) {
        this._providerCode = providerCode
    }

    public get isActive(): boolean {
        return this._isActive
    }

    public set isActive(isActive: boolean) {
        this._isActive = isActive
    }

    public set providerId(providerId: number) {
        this._providerId = providerId
    }

    public get providerId(): number {
        return this._providerId
    }

    public set storeId(storeId: number) {
        this._storeId = storeId
    }

    public get storeId(): number {
        return this._storeId
    }

    public set version(version: number) {
        this._version = version
    }

    public get version(): number {
        return this._version
    }

    public set fileId(fileId: number) {
        this._fileId = fileId
    }

    public get fileId(): number {
        return this._fileId
    }
}