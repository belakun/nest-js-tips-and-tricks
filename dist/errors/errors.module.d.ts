import type { DynamicModule, HttpException, Type } from '@nestjs/common';
import type { ErrorType } from './constants';
export declare class ErrorsModule {
    static register(errors: Array<[ErrorType, Type<HttpException>]>): DynamicModule;
}
