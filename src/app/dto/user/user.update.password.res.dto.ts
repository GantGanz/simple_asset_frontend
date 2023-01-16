import { UserUpdatePasswordReqDto } from "./user.update.password.req.dto"

export class UserUpdatePasswordResDto {
    private _data!: UserUpdatePasswordReqDto
    private _message!: string

    public set message(message: string) {
        this._message = message
    }

    public get message(): string {
        return this._message
    }

    public set data(data: UserUpdatePasswordReqDto) {
        this._data = data
    }

    public get data(): UserUpdatePasswordReqDto {
        return this._data
    }
}