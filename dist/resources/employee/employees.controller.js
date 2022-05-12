"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeesController = void 0;
const common_1 = require("@nestjs/common");
const mirroring_controller_decorator_1 = require("../../decorators/mirroring-controller.decorator");
const crud_controller_1 = require("../../generic/crud.controller");
const create_employee_dto_1 = require("./dto/create-employee.dto");
const superviser_assignment_dto_1 = require("./dto/superviser-assignment.dto");
const employee_service_1 = require("./employee.service");
let EmployeesController = class EmployeesController extends (0, crud_controller_1.CrudController)(employee_service_1.EmployeeService) {
    async create(employee) {
        const [failure, success] = await this.employeeService.create(employee);
        if (failure) {
            this.errors.get(failure);
        }
        return success;
    }
    async assignSupervisor(assignmentData) {
        const [failure, success] = await this.employeeService.assignSupervisor(assignmentData.employeeId, assignmentData.supervisorId);
        if (failure) {
            throw this.errors.get(failure);
        }
        return success;
    }
    async getSubordinates(employeeId) {
        const [failure, success] = await this.employeeService.findSubordinates(employeeId);
        if (failure) {
            this.errors.get(failure);
        }
        return success;
    }
    async getSupervisors(employeeId) {
        const [failure, success] = await this.employeeService.findSupervisors(employeeId);
        if (failure) {
            this.errors.get(failure);
        }
        return success;
    }
    async promote(id) {
        const [failure, success] = await this.employeeService.promote(id);
        if (failure) {
            throw this.errors.get(failure);
        }
        return success;
    }
};
__decorate([
    (0, common_1.Inject)(employee_service_1.EmployeeService),
    __metadata("design:type", employee_service_1.EmployeeService)
], EmployeesController.prototype, "employeeService", void 0);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_employee_dto_1.CreateEmployeeDto]),
    __metadata("design:returntype", Promise)
], EmployeesController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('assign'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [superviser_assignment_dto_1.SupervisorAssignmentDto]),
    __metadata("design:returntype", Promise)
], EmployeesController.prototype, "assignSupervisor", null);
__decorate([
    (0, common_1.Get)('subordinates'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EmployeesController.prototype, "getSubordinates", null);
__decorate([
    (0, common_1.Get)('supervisors'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EmployeesController.prototype, "getSupervisors", null);
__decorate([
    (0, common_1.Get)('promote'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EmployeesController.prototype, "promote", null);
EmployeesController = __decorate([
    (0, mirroring_controller_decorator_1.MirroringController)({ path: __dirname })
], EmployeesController);
exports.EmployeesController = EmployeesController;
//# sourceMappingURL=employees.controller.js.map