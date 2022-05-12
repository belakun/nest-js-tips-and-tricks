import type { MiddlewareConsumer, NestModule } from '@nestjs/common';
import {
  BadRequestException,
  Global,
  HttpException,
  InternalServerErrorException,
  Module,
  NotFoundException,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EmployeesModule } from '@resources/employee/employees.module';
import 'reflect-metadata';
import appConfig from './config/app.config';
import pgConfig from './config/pg.config';
import { ErrorType } from './errors/constants';
import { ErrorsModule } from './errors/errors.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { RequestLoggerMiddleware } from './midleware/request-logger.middleware';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${process.env.PWD}/.env`,
      isGlobal: true,
      load: [appConfig, pgConfig],
      expandVariables: true,
    }),
    InfrastructureModule,
    EmployeesModule,
    ErrorsModule.register([
      [ErrorType.APPLICATION_ERROR, HttpException],
      [ErrorType.NOT_FOUND_ERROR, NotFoundException],
      [ErrorType.VALIDATION_ERROR, BadRequestException],
      [ErrorType.DB_ERROR, InternalServerErrorException],
      [ErrorType.INTERNAL_ERROR, InternalServerErrorException],
    ]),
  ],
  controllers: [],
  exports: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(RequestLoggerMiddleware).forRoutes('*');
  }
}
