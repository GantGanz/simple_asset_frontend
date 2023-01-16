export class ProviderDeleteReqDto {
    private providerId!: number

    public set _providerId(providerId: number) {
        this.providerId = providerId
    }

    public get _providerId(): number {
        return this.providerId
    }
}