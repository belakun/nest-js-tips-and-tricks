import { CreateEmployeeDto } from './dto/create-employee.dto';
import { SupervisorAssignmentDto } from './dto/superviser-assignment.dto';
import { EmployeeService } from './employee.service';
import type { Employee } from './entity/employee.entity';
declare const EmployeesController_base: import("@nestjs/common").Type<import("../../contracts/generic/crud-controller.interface").ICrudController<EmployeeService, Employee>>;
export declare class EmployeesController extends EmployeesController_base {
    private employeeService;
    create(employee: CreateEmployeeDto): Promise<any>;
    assignSupervisor(assignmentData: SupervisorAssignmentDto): Promise<any>;
    getSubordinates(employeeId: string): Promise<any>;
    getSupervisors(employeeId: string): Promise<any>;
    promote(id: string): Promise<any>;
}
export {};
