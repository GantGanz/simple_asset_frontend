export class LoginReqDto {
    private email!: string
    private password!: string

    public set _email(email: string) {
        this.email = email
    }

    public get _email(): string {
        return this.email
    }

    public set _password(password: string) {
        this.password = password
    }

    public get _password(): string {
        return this.password
    }
}