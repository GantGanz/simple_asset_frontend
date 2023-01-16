export class UserDataDto {
    private _userId!: number
    private _version!: number
    private _fullname!: string
    private _password!: string
    private _email!: string
    private _fileId!: number
    private _roleName!: string
    private _isActive!: boolean

    public get isActive(): boolean {
        return this._isActive
    }

    public set isActive(isActive: boolean) {
        this._isActive = isActive
    }

    public set userId(userId: number) {
        this._userId = userId
    }

    public get userId(): number {
        return this._userId
    }

    public set version(version: number) {
        this._version = version
    }

    public get version(): number {
        return this._version
    }

    public set fullname(fullname: string) {
        this._fullname = fullname
    }

    public get fullname(): string {
        return this._fullname
    }

    public set password(password: string) {
        this._password = password
    }

    public get password(): string {
        return this._password
    }

    public set roleName(roleName: string) {
        this._roleName = roleName
    }

    public get roleName(): string {
        return this._roleName
    }

    public set email(email: string) {
        this._email = email
    }

    public get email(): string {
        return this._email
    }

    public set fileId(fileId: number) {
        this._fileId = fileId
    }

    public get fileId(): number {
        return this._fileId
    }
}