export class AssetDataDto {
    private _assetId!: number
    private _assetName!: string
    private _invoiceNumber!: string
    private _serialNumber!: string
    private _expiredDate!: string
    private _companyId!: number
    private _providerId!: number
    private _assetTypeId!: number
    private _assetStatusId!: number
    private _companyName!: string
    private _providerName!: string
    private _assetTypeName!: string
    private _assetStatusName!: string
    private _version!: number
    private _fileId!: number
    private _isActive!: boolean

    public get isActive(): boolean {
        return this._isActive
    }

    public set isActive(isActive: boolean) {
        this._isActive = isActive
    }


    public get assetId(): number {
        return this._assetId
    }

    public set assetId(assetId: number) {
        this._assetId = assetId
    }

    public get assetName(): string {
        return this._assetName
    }

    public set assetName(assetName: string
    ) {
        this._assetName = assetName
    }

    public get invoiceNumber(): string {
        return this._invoiceNumber
    }

    public set invoiceNumber(invoiceNumber: string
    ) {
        this._invoiceNumber = invoiceNumber
    }

    public get serialNumber(): string {
        return this._serialNumber
    }

    public set serialNumber(serialNumber: string
    ) {
        this._serialNumber = serialNumber
    }

    public get expiredDate(): string {
        return this._expiredDate
    }

    public set expiredDate(expiredDate: string
    ) {
        this._expiredDate = expiredDate
    }

    public get companyName(): string {
        return this._companyName
    }

    public set companyName(companyName: string
    ) {
        this._companyName = companyName
    }

    public get providerName(): string {
        return this._providerName
    }

    public set providerName(providerName: string
    ) {
        this._providerName = providerName
    }

    public get assetTypeName(): string {
        return this._assetTypeName
    }

    public set assetTypeName(assetTypeName: string
    ) {
        this._assetTypeName = assetTypeName
    }

    public get assetStatusName(): string {
        return this._assetStatusName
    }

    public set assetStatusName(assetStatusName: string
    ) {
        this._assetStatusName = assetStatusName
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

    public get companyId(): number {
        return this._companyId
    }

    public set companyId(companyId: number
    ) {
        this._companyId = companyId
    }

    public get providerId(): number {
        return this._providerId
    }

    public set providerId(providerId: number
    ) {
        this._providerId = providerId
    }

    public get assetTypeId(): number {
        return this._assetTypeId
    }

    public set assetTypeId(assetTypeId: number
    ) {
        this._assetTypeId = assetTypeId
    }

    public get assetStatusId(): number {
        return this._assetStatusId
    }

    public set assetStatusId(assetStatusId: number
    ) {
        this._assetStatusId = assetStatusId
    }
}