export class StoreUpdateReqDto {
    private storeId!: number
    private version!: number
    private storeName!: string
    private storeCode!: string
    private fileCodes!: string
    private extensions!: string
    private isActive!: boolean

    public set _isActive(isActive: boolean) {
        this.isActive = isActive
    }

    public get _isActive(): boolean {
        return this.isActive
    }

    public set _storeCode(storeCode: string) {
        this.storeCode = storeCode
    }

    public get _storeCode(): string {
        return this.storeCode
    }

    public set _storeName(storeName: string) {
        this.storeName = storeName
    }

    public get _storeName(): string {
        return this.storeName
    }

    public set _fileCodes(fileCodes: string) {
        this.fileCodes = fileCodes
    }

    public get _fileCodes(): string {
        return this.fileCodes
    }

    public set _extensions(extensions: string) {
        this.extensions = extensions
    }

    public get _extensions(): string {
        return this.extensions
    }

    public set _version(version: number) {
        this.version = version
    }

    public get _version(): number {
        return this.version
    }

    public set _storeId(storeId: number) {
        this.storeId = storeId
    }

    public get _storeId(): number {
        return this.storeId
    }
}