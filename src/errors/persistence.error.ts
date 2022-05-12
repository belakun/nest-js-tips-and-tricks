import type { Type } from '@nestjs/common';
import type { IApplicationError } from 'src/contracts/errors/application-error.interface';
import { ErrorType } from './constants';

export class FailedToSaveError<E> implements IApplicationError {
  name: string;
  stack?: string;
  message: string;
  type: ErrorType = ErrorType.DB_ERROR;

  constructor(entity: Type<E>) {
    this.message = `Failed to save entity: "${entity.name}"`;
  }
}
