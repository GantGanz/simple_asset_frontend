import { Component, OnDestroy, OnInit } from "@angular/core"
import { Router } from "@angular/router"
import { Subscription } from "rxjs"
import { EmployeeInsertReqDto } from "../../../dto/employee/employee.insert.req.dto"
import { EmployeesDto } from "../../../dto/employee/employees.dto"
import { EmployeeService } from "../../../service/employee.service"
@Component({
    selector: 'employee-insert',
    templateUrl: './employee-insert.component.html'
})
export class EmployeeInsertComponent implements OnInit, OnDestroy {
    employeesDto = new EmployeesDto()
    private employeeSubscription?: Subscription
    employeeInsertReqDto = new EmployeeInsertReqDto()

    constructor(private employeeService: EmployeeService, private router: Router) { }

    ngOnInit(): void {

    }

    submitInsert(): void {
        this.employeeSubscription = this.employeeService.insertEmployee(this.employeeInsertReqDto).subscribe(() => this.router.navigateByUrl("/employees"))
    }

    ngOnDestroy(): void {
        this.employeeSubscription?.unsubscribe()
    }
}