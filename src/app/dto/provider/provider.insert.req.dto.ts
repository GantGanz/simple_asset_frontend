export class ProviderInsertReqDto {
    private providerName!: string
    private providerCode!: string
    private storeId!: number
    private fileCodes!: string
    private extensions!: string

    public get _storeId(): number {
        return this.storeId
    }

    public set _storeId(storeId: number) {
        this.storeId = storeId
    }

    public set _providerName(providerName: string) {
        this.providerName = providerName
    }

    public get _providerName(): string {
        return this.providerName
    }

    public set _fileCodes(fileCodes: string) {
        this.fileCodes = fileCodes
    }

    public get _fileCodes(): string {
        return this.fileCodes
    }

    public set _providerCode(providerCode: string) {
        this.providerCode = providerCode
    }

    public get _providerCode(): string {
        return this.providerCode
    }

    public set _extensions(extensions: string) {
        this.extensions = extensions
    }

    public get _extensions(): string {
        return this.extensions
    }
}