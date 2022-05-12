import type { HttpException, Type } from '@nestjs/common';
import type { ErrorType } from 'src/errors/constants';
import type { IApplicationError } from './application-error.interface';
export interface IErrorsService {
    knownErrors: Map<ErrorType, Type<HttpException>>;
    get(err: IApplicationError): void;
}
export declare const TErrorsService: unique symbol;
