export class UserUpdatePasswordReqDto {
    private userId!: number
    private version!: number
    private oldPassword!: string
    private newPassword!: string

    public set _oldPassword(_oldPassword: string) {
        this.oldPassword = _oldPassword
    }

    public get _oldPassword(): string {
        return this.oldPassword
    }

    public set _newPassword(_newPassword: string) {
        this.newPassword = _newPassword
    }

    public get _newPassword(): string {
        return this.newPassword
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
}