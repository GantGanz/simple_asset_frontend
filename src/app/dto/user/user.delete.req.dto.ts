export class UserDeleteReqDto {
    private userId!: number

    public set _userId(userId: number) {
        this.userId = userId
    }

    public get _userId(): number {
        return this.userId
    }
}