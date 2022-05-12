import type { AsyncServiceResponse } from 'src/contracts/generic/async-service-response';
import type { CreateEmployeeDto } from './dto/create-employee.dto';
import { Employee } from './entity/employee.entity';
declare const EmployeeService_base: import("@nestjs/common").Type<import("../../contracts/generic/crud-service.interface").ICrudService<Employee>>;
export declare class EmployeeService extends EmployeeService_base {
    private entityManager;
    getEmployeeTree(id: string): AsyncServiceResponse<Employee>;
    create(data: CreateEmployeeDto): AsyncServiceResponse<Employee>;
    saveTree(employee: CreateEmployeeDto): AsyncServiceResponse<Employee>;
    private getManyByIds;
}
export {};
