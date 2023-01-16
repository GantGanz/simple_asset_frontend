import { Component, OnDestroy, OnInit } from "@angular/core"
import { ActivatedRoute } from "@angular/router"
import { Subscription } from "rxjs"
import { EmployeeUpdateReqDto } from "../../../dto/employee/employee.update.req.dto"
import { EmployeeService } from "../../../service/employee.service"
@Component({
    selector: 'employee-update',
    templateUrl: './employee-update.component.html'
})
export class EmployeeUpdateComponent implements OnInit, OnDestroy {
    private employeeSubscription?: Subscription
    employeeUpdateDto = new EmployeeUpdateReqDto()

    constructor(private employeeService: EmployeeService, private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(result => {
            this.employeeSubscription = this.employeeService.getById(result['id']).subscribe(result => {
                this.employeeUpdateDto._employeeId = result.employeeId
                this.employeeUpdateDto._employeeName = result.employeeName
                this.employeeUpdateDto._employeeCode = result.employeeCode
                this.employeeUpdateDto._isActive = result.isActive
                this.employeeUpdateDto._version = result.version
            })
        })
    }

    saveUpdate(): void {
        this.employeeSubscription = this.employeeService.updateEmployee(this.employeeUpdateDto).subscribe()
    }

    ngOnDestroy(): void {
        this.employeeSubscription?.unsubscribe()
    }
}