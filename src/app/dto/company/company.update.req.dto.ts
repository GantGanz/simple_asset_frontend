export class CompanyUpdateReqDto {
    private companyId!: number
    private companyName!: string
    private fileCodes!: string
    private extensions!: string
    private version!: number
    private companyCode!: string
    private isActive!: boolean

    public set _isActive(isActive: boolean) {
        this.isActive = isActive
    }

    public get _isActive(): boolean {
        return this.isActive
    }

    public set _companyCode(companyCode: string) {
        this.companyCode = companyCode
    }

    public get _companyCode(): string {
        return this.companyCode
    }

    public get _version(): number {
        return this.version
    }

    public set _version(version: number) {
        this.version = version
    }

    public get _companyId(): number {
        return this.companyId
    }

    public set _companyId(companyId: number
    ) {
        this.companyId = companyId
    }

    public get _fileCodes(): string {
        return this.fileCodes
    }

    public set _fileCodes(fileCodes: string
    ) {
        this.fileCodes = fileCodes
    }

    public get _extensions(): string {
        return this.extensions
    }

    public set _extensions(extensions: string) {
        this.extensions = extensions
    }

    public get _companyName(): string {
        return this.companyName
    }

    public set _companyName(companyName: string
    ) {
        this.companyName = companyName
    }

}