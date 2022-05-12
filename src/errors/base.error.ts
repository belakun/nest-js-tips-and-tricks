import type { IApplicationError } from 'src/contracts/errors/application-error.interface';
import { ErrorType } from './constants';

export class ApplicationError implements IApplicationError {
  name: string;
  stack?: string;
  message: string;
  type: ErrorType = ErrorType.APPLICATION_ERROR;

  constructor(message: string) {
    this.message = message;
  }

  get payload(): string {
    return this.message;
  }
}
