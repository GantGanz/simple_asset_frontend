import { UserDataDto } from "./user.data.dto"

export class UsersDto {
    private _data!: UserDataDto[]

    public set data(data: UserDataDto[]) {
        this._data = data
    }

    public get data(): UserDataDto[] {
        return this._data
    }
}