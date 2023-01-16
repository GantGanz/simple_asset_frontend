import { CheckOutDetailInsertReqDto } from "../check-out-detail/check.out.detail.insert.req.dto"

export class CheckOutInsertReqDto {
    private checkOutLocation!: string
    private assetGeneralId!: number
    private employeeId!: number
    private checkOutDetails!: CheckOutDetailInsertReqDto[]

    public set _checkOutLocation(checkOutLocation: string) {
        this.checkOutLocation = checkOutLocation
    }

    public get _checkOutLocation(): string {
        return this.checkOutLocation
    }

    public set _assetGeneralId(assetGeneralId: number) {
        this.assetGeneralId = assetGeneralId
    }

    public get _assetGeneralId(): number {
        return this.assetGeneralId
    }

    public set _employeeId(employeeId: number) {
        this.employeeId = employeeId
    }

    public get _employeeId(): number {
        return this.employeeId
    }

    public set _checkOutDetails(checkOutDetails: CheckOutDetailInsertReqDto[]) {
        this.checkOutDetails = checkOutDetails
    }

    public get _checkOutDetails(): CheckOutDetailInsertReqDto[] {
        return this.checkOutDetails
    }
}