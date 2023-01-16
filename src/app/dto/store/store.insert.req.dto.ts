export class StoreInsertReqDto {
    private storeName!: string
    private storeCode!: string
    private fileCodes!: string
    private extensions!: string

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

    public set _storeCode(storeCode: string) {
        this.storeCode = storeCode
    }

    public get _storeCode(): string {
        return this.storeCode
    }

    public set _extensions(extensions: string) {
        this.extensions = extensions
    }

    public get _extensions(): string {
        return this.extensions
    }
}