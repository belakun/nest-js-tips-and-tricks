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
exports.CrudController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const errors_service_interface_1 = require("../contracts/errors/errors-service.interface");
function CrudController(service) {
    class CrudControllerHost {
        async getAll() {
            const [failure, success] = await this.service.findMany();
            if (failure) {
                this.errors.get(failure);
            }
            return success;
        }
        async getOne(id) {
            const [failure, success] = await this.service.findOne(id);
            if (failure) {
                this.errors.get(failure);
            }
            return success;
        }
        async create(data) {
            throw new Error('Method not implemented.');
        }
        async update(id, data) {
            throw new Error('Method not implemented.');
        }
        async delete(id) {
            throw new Error('Method not implemented.');
        }
    }
    __decorate([
        (0, common_1.Inject)(service),
        __metadata("design:type", Object)
    ], CrudControllerHost.prototype, "service", void 0);
    __decorate([
        (0, common_1.Inject)(errors_service_interface_1.TErrorsService),
        __metadata("design:type", Object)
    ], CrudControllerHost.prototype, "errors", void 0);
    __decorate([
        (0, common_1.Get)(),
        openapi.ApiResponse({ status: 200, type: [Object] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], CrudControllerHost.prototype, "getAll", null);
    __decorate([
        (0, common_1.Get)(':id'),
        openapi.ApiResponse({ status: 200, type: Object }),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], CrudControllerHost.prototype, "getOne", null);
    __decorate([
        (0, common_1.Post)(),
        openapi.ApiResponse({ status: 201, type: Object }),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], CrudControllerHost.prototype, "create", null);
    __decorate([
        (0, common_1.Patch)(':id'),
        openapi.ApiResponse({ status: 200, type: Object }),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object]),
        __metadata("design:returntype", Promise)
    ], CrudControllerHost.prototype, "update", null);
    __decorate([
        (0, common_1.Delete)(':id'),
        openapi.ApiResponse({ status: 200 }),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], CrudControllerHost.prototype, "delete", null);
    return CrudControllerHost;
}
exports.CrudController = CrudController;
//# sourceMappingURL=crud.controller.js.map