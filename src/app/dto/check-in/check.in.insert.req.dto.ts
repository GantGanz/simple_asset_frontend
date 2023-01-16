import { CheckInDetailInsertReqDto } from "../check-in-detail/check.in.detail.insert.req.dto"

export class CheckInInsertReqDto {
    private checkOutId!: number
    private checkInDetails!: CheckInDetailInsertReqDto[]

    public set _checkOutId(checkOutId: number) {
        this.checkOutId = checkOutId
    }

    public get _checkOutId(): number {
        return this.checkOutId
    }

    public set _checkInDetails(checkInDetails: CheckInDetailInsertReqDto[]) {
        this.checkInDetails = checkInDetails
    }

    public get _checkInDetails(): CheckInDetailInsertReqDto[] {
        return this.checkInDetails
    }
}