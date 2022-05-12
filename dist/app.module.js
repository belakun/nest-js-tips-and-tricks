"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const employees_module_1 = require("./resources/employee/employees.module");
require("reflect-metadata");
const app_config_1 = require("./config/app.config");
const pg_config_1 = require("./config/pg.config");
const constants_1 = require("./errors/constants");
const errors_module_1 = require("./errors/errors.module");
const infrastructure_module_1 = require("./infrastructure/infrastructure.module");
const request_logger_middleware_1 = require("./midleware/request-logger.middleware");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(request_logger_middleware_1.RequestLoggerMiddleware).forRoutes('*');
    }
};
AppModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: `${process.env.PWD}/.env`,
                isGlobal: true,
                load: [app_config_1.default, pg_config_1.default],
                expandVariables: true,
            }),
            infrastructure_module_1.InfrastructureModule,
            employees_module_1.EmployeesModule,
            errors_module_1.ErrorsModule.register([
                [constants_1.ErrorType.APPLICATION_ERROR, common_1.HttpException],
                [constants_1.ErrorType.NOT_FOUND_ERROR, common_1.NotFoundException],
                [constants_1.ErrorType.VALIDATION_ERROR, common_1.BadRequestException],
                [constants_1.ErrorType.DB_ERROR, common_1.InternalServerErrorException],
                [constants_1.ErrorType.INTERNAL_ERROR, common_1.InternalServerErrorException],
            ]),
        ],
        controllers: [],
        exports: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map