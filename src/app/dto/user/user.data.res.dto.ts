import { UserDataDto } from "./user.data.dto"

export class UserDataResDto {
    private _data!: UserDataDto

    public set data(data: UserDataDto) {
        this._data = data
    }

    public get data(): UserDataDto {
        return this._data
    }
}