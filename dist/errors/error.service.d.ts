import type { HttpException, Type } from '@nestjs/common';
import type { IApplicationError } from 'src/contracts/errors/application-error.interface';
import type { IErrorsService } from 'src/contracts/errors/errors-service.interface';
import type { ErrorType } from './constants';
export declare class ErrorService implements IErrorsService {
    knownErrors: Map<ErrorType, Type<HttpException>>;
    constructor(errors: any);
    get(err: IApplicationError): HttpException;
}
