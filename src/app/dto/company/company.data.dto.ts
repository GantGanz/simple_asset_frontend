export class CompanyDataDto {
    private _companyId!: number
    private _companyName!: string
    private _companyCode!: string
    private _version!: number
    private _fileId!: number
    private _isActive!: boolean

    public get isActive(): boolean {
        return this._isActive
    }

    public set isActive(isActive: boolean) {
        this._isActive = isActive
    }

    public get companyCode(): string {
        return this._companyCode
    }

    public set companyCode(companyCode: string) {
        this._companyCode = companyCode
    }

    public get companyId(): number {
        return this._companyId
    }

    public set companyId(companyId: number) {
        this._companyId = companyId
    }

    public get companyName(): string {
        return this._companyName
    }

    public set companyName(companyName: string
    ) {
        this._companyName = companyName
    }

    public get version(): number {
        return this._version
    }

    public set version(version: number
    ) {
        this._version = version
    }

    public get fileId(): number {
        return this._fileId
    }

    public set fileId(fileId: number) {
        this._fileId = fileId
    }
}