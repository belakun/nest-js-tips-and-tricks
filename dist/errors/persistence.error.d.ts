import type { Type } from '@nestjs/common';
import type { IApplicationError } from 'src/contracts/errors/application-error.interface';
import { ErrorType } from './constants';
export declare class FailedToSaveError<E> implements IApplicationError {
    name: string;
    stack?: string;
    message: string;
    type: ErrorType;
    constructor(entity: Type<E>);
}
