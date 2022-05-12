import type { DynamicModule, HttpException, Type } from '@nestjs/common';
import { Global, Module } from '@nestjs/common';
import type { IErrorsService } from 'src/contracts/errors/errors-service.interface';
import { TErrorsService } from 'src/contracts/errors/errors-service.interface';
import IOC from '../utils/IOC';
import type { ErrorType } from './constants';
import { ErrorService } from './error.service';

@Global()
@Module({})
export class ErrorsModule {
  static register(errors: Array<[ErrorType, Type<HttpException>]>): DynamicModule {
    return {
      module: ErrorsModule,
      providers: [
        {
          provide: 'ERRORS_REGISTRY',
          useValue: errors,
        },
        IOC<IErrorsService>(TErrorsService, ErrorService),
      ],
      exports: [
        {
          provide: TErrorsService,
          useClass: ErrorService,
        },
      ],
    };
  }
}
