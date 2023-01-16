export class CompanyInsertReqDto {
    private companyName!: string
    private companyCode!: string
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


    public get _companyCode(): string {
        return this.companyCode
    }

    public set _companyCode(companyCode: string) {
        this.companyCode = companyCode
    }

    public get _companyName(): string {
        return this.companyName
    }

    public set _companyName(companyName: string
    ) {
        this.companyName = companyName
    }

}