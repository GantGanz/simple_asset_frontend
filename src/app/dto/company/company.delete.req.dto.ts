export class CompanyDeleteReqDto {
    private companyId!: number

    public set _companyId(companyId: number) {
        this.companyId = companyId
    }

    public get _companyId(): number {
        return this.companyId
    }
}