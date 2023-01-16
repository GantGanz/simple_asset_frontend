export class UserInsertReqDto {
    private fullname!: string
    private email!: string
    private fileCodes!: string
    private extensions!: string

    public set _fullname(fullname: string) {
        this.fullname = fullname
    }

    public get _fullname(): string {
        return this.fullname
    }

    public set _fileCodes(fileCodes: string) {
        this.fileCodes = fileCodes
    }

    public get _fileCodes(): string {
        return this.fileCodes
    }

    public set _email(email: string) {
        this.email = email
    }

    public get _email(): string {
        return this.email
    }

    public set _extensions(extensions: string) {
        this.extensions = extensions
    }

    public get _extensions(): string {
        return this.extensions
    }
}