import { Component, OnDestroy, OnInit } from "@angular/core"
import { Subscription } from "rxjs"
import { EmployeesDto } from "../../../dto/employee/employees.dto"
import { EmployeeService } from "../../../service/employee.service"
@Component({
    selector: 'employee-list',
    templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent implements OnInit, OnDestroy {
    employeesDto = new EmployeesDto()
    private employeeSubscription?: Subscription
    itemId = 1

    constructor(private employeeService: EmployeeService) { }

    ngOnInit(): void {
        this.init()
    }

    getItemId(id: number) {
        this.itemId = id
    }

    delete() {
        this.employeeSubscription = this.employeeService.delete(this.itemId).subscribe(() => {
            this.init()
        })
    }

    init() {
        this.employeeSubscription = this.employeeService.getAll().subscribe(result => {
            this.employeesDto = result
        })
    }

    ngOnDestroy(): void {
        this.employeeSubscription?.unsubscribe()
    }

}