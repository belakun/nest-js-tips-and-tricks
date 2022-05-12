import { BadRequestException } from '@nestjs/common';
import type { IApplicationError } from 'src/contracts/errors/application-error.interface';
import { ErrorType } from './constants';

export class ApplicationError extends BadRequestException implements IApplicationError {
  name: string;
  stack?: string;
  message: string;
  type: ErrorType = ErrorType.APPLICATION_ERROR;

  constructor(message: string) {
    super();
    this.message = message;
  }

  get payload(): string {
    return this.message;
  }
}

// export class BusinessError implements IApplicationError {
//   message: string;
//   subject: Function;
// }

// export class PersistenceError {}

// export class InfrastructureError {}

// export enum ApplicationContext {
//   BUSINESS,
//   PERSISTENCE,
//   INFRASTRUCTURE,
// }

// export enum ApplicationErrorStatus {
//   ENTITY_NOT_FOUND,
// }
