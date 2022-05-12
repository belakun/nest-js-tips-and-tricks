import type { HttpException, Type } from '@nestjs/common';
import { Inject, Injectable } from '@nestjs/common';
import type { IApplicationError } from 'src/contracts/errors/application-error.interface';
import type { IErrorsService } from 'src/contracts/errors/errors-service.interface';
import type { ErrorType } from './constants';

@Injectable()
export class ErrorService implements IErrorsService {
  knownErrors = new Map<ErrorType, Type<HttpException>>();

  constructor(@Inject('ERRORS_REGISTRY') errors) {
    errors.forEach(e => this.knownErrors.set(e[0], e[1]));
  }

  get(err: IApplicationError): HttpException {
    const errorConstructor = this.knownErrors.get(err.type);

    // Pass additional arguments here if needed.
    return new errorConstructor(err.message);
  }
}
