export class ProviderUpdateReqDto {
    private providerId!: number
    private version!: number
    private providerName!: string
    private providerCode!: string
    private storeId!: number
    private fileCodes!: string
    private extensions!: string
    private isActive!: boolean

    public set _isActive(isActive: boolean) {
        this.isActive = isActive
    }

    public get _isActive(): boolean {
        return this.isActive
    }
    public set _providerCode(providerCode: string) {
        this.providerCode = providerCode
    }

    public get _providerCode(): string {
        return this.providerCode
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

    public set _providerId(providerId: number) {
        this.providerId = providerId
    }

    public get _providerId(): number {
        return this.providerId
    }

    public set _storeId(storeId: number) {
        this.storeId = storeId
    }

    public get _storeId(): number {
        return this.storeId
    }
}