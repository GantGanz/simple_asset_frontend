import { UserUpdateReqDto } from "./user.update.req.dto"

export class UserUpdateResDto {
    private _data!: UserUpdateReqDto
    private _message!: string

    public set message(message: string) {
        this._message = message
    }

    public get message(): string {
        return this._message
    }

    public set data(data: UserUpdateReqDto) {
        this._data = data
    }

    public get data(): UserUpdateReqDto {
        return this._data
    }
}