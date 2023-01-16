import { UserInsertDataResDto } from "./user.insert.data.res.dto"

export class UserInsertResDto {
    private _data!: UserInsertDataResDto
    private _message!: string

    public set message(message: string) {
        this._message = message
    }

    public get message(): string {
        return this._message
    }

    public set data(data: UserInsertDataResDto) {
        this._data = data
    }

    public get data(): UserInsertDataResDto {
        return this._data
    }
}