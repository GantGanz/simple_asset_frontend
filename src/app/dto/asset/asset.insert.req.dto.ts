export class AssetInsertReqDto {
    private assetName!: string
    private assetCode!: string
    private invoiceNumber!: string
    private serialNumber!: string
    private expiredDate!: string
    private companyId!: number
    private providerId!: number
    private assetTypeId!: number
    private assetStatusId!: number
    private fileCodes!: string
    private extensions!: string

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

    public get _invoiceNumber(): string {
        return this.invoiceNumber
    }

    public set _invoiceNumber(invoiceNumber: string
    ) {
        this.invoiceNumber = invoiceNumber
    }

    public get _serialNumber(): string {
        return this.serialNumber
    }

    public set _serialNumber(serialNumber: string
    ) {
        this.serialNumber = serialNumber
    }

    public get _expiredDate(): string {
        return this.expiredDate
    }

    public set _expiredDate(expiredDate: string
    ) {
        this.expiredDate = expiredDate
    }

    public get _companyId(): number {
        return this.companyId
    }

    public set _companyId(companyId: number
    ) {
        this.companyId = companyId
    }

    public get _providerId(): number {
        return this.providerId
    }

    public set _providerId(providerId: number
    ) {
        this.providerId = providerId
    }

    public get _assetTypeId(): number {
        return this.assetTypeId
    }

    public set _assetTypeId(assetTypeId: number
    ) {
        this.assetTypeId = assetTypeId
    }

    public get _assetStatusId(): number {
        return this.assetStatusId
    }

    public set _assetStatusId(assetStatusId: number) {
        this.assetStatusId = assetStatusId
    }

    public set _assetName(assetName: string) {
        this.assetName = assetName
    }

    public get _assetName(): string {
        return this.assetName
    }

    public set _assetCode(assetCode: string) {
        this.assetCode = assetCode
    }

    public get _assetCode(): string {
        return this.assetCode
    }
}