export class UserDeleteResDto {
    private _message!: string

    public set message(message: string) {
        this._message = message
    }

    public get message(): string {
        return this._message
    }
}