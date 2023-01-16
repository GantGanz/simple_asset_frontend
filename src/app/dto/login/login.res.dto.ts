export class LoginResDto {
    private _id!: number
    private _token!: string
    private _fullname!: string
    private _email!: string
    private _roleCode!: string
    private _photoId!: number

    public set id(id: number) {
        this._id = id
    }

    public get id(): number {
        return this._id
    }

    public set photoId(photoId: number) {
        this._photoId = photoId
    }

    public get photoId(): number {
        return this._photoId
    }

    public set token(token: string) {
        this._token = token
    }

    public get token(): string {
        return this._token
    }

    public set fullname(fullname: string) {
        this._fullname = fullname
    }

    public get fullname(): string {
        return this._fullname
    }

    public set email(email: string) {
        this._email = email
    }

    public get email(): string {
        return this._email
    }

    public set roleCode(roleCode: string) {
        this._roleCode = roleCode
    }

    public get roleCode(): string {
        return this._roleCode
    }

}