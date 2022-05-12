import type { IApplicationError } from 'src/contracts/errors/application-error.interface';
import { ErrorType } from './constants';
export declare class ApplicationError implements IApplicationError {
    name: string;
    stack?: string;
    message: string;
    type: ErrorType;
    constructor(message: string);
    get payload(): string;
}
