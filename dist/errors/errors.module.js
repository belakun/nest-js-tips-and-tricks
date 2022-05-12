"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ErrorsModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorsModule = void 0;
const common_1 = require("@nestjs/common");
const errors_service_interface_1 = require("../contracts/errors/errors-service.interface");
const IOC_1 = require("../utils/IOC");
const error_service_1 = require("./error.service");
let ErrorsModule = ErrorsModule_1 = class ErrorsModule {
    static register(errors) {
        return {
            module: ErrorsModule_1,
            providers: [
                {
                    provide: 'ERRORS_REGISTRY',
                    useValue: errors,
                },
                (0, IOC_1.default)(errors_service_interface_1.TErrorsService, error_service_1.ErrorService),
            ],
            exports: [
                {
                    provide: errors_service_interface_1.TErrorsService,
                    useClass: error_service_1.ErrorService,
                },
            ],
        };
    }
};
ErrorsModule = ErrorsModule_1 = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({})
], ErrorsModule);
exports.ErrorsModule = ErrorsModule;
//# sourceMappingURL=errors.module.js.map