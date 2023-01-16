export class UserUpdateReqDto {
    private userId!: number
    private version!: number
    private fullname!: string
    private email!: string
    private password!: string
    private fileCodes!: string
    private extensions!: string
    private isActive!: boolean

    public set _fullname(_fullname: string) {
        this.fullname = _fullname
    }

    public get _fullname(): string {
        return this.fullname
    }

    public set _email(_email: string) {
        this.email = _email
    }

    public get _email(): string {
        return this.email
    }

    public set _fileCodes(_fileCodes: string) {
        this.fileCodes = _fileCodes
    }

    public get _fileCodes(): string {
        return this.fileCodes
    }

    public set _extensions(_extensions: string) {
        this.extensions = _extensions
    }

    public get _extensions(): string {
        return this.extensions
    }

    public set _password(_password: string) {
        this.password = _password
    }

    public get _password(): string {
        return this.password
    }

    public set _version(_version: number) {
        this.version = _version
    }

    public get _version(): number {
        return this.version
    }

    public set _userId(_userId: number) {
        this.userId = _userId
    }

    public get _userId(): number {
        return this.userId
    }

    public set _isActive(_isActive: boolean) {
        this.isActive = _isActive
    }

    public get _isActive(): boolean {
        return this.isActive
    }
}