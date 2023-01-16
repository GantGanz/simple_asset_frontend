export class StoreDataDto {
    private _storeId!: number
    private _version!: number
    private _storeName!: string
    private _storeCode!: string
    private _fileId!: number
    private _isActive!: boolean

    public get storeName(): string {
        return this._storeName
    }

    public set storeName(storeName: string
    ) {
        this._storeName = storeName
    }

    public get storeCode(): string {
        return this._storeCode
    }

    public set storeCode(storeCode: string) {
        this._storeCode = storeCode
    }

    public get isActive(): boolean {
        return this._isActive
    }

    public set isActive(isActive: boolean) {
        this._isActive = isActive
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