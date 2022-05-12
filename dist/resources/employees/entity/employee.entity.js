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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let Employee = class Employee {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, name: { required: true, type: () => String }, subordinates: { required: false, type: () => [require("./employee.entity").Employee] }, supervisor: { required: true, type: () => require("./employee.entity").Employee } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Employee.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], Employee.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.TreeChildren)(),
    __metadata("design:type", Array)
], Employee.prototype, "subordinates", void 0);
__decorate([
    (0, typeorm_1.TreeParent)(),
    __metadata("design:type", Employee)
], Employee.prototype, "supervisor", void 0);
Employee = __decorate([
    (0, typeorm_1.Entity)(),
    (0, typeorm_1.Tree)('closure-table')
], Employee);
exports.Employee = Employee;
//# sourceMappingURL=employee.entity.js.map