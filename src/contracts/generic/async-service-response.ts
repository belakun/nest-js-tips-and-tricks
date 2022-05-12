import type { IApplicationError } from '../errors/application-error.interface';

export type SuccessResponse<T> = [null, T];
export type FailureResponse = [IApplicationError];

export type ServiceResponse<T> = SuccessResponse<T> | FailureResponse;
export type AsyncServiceResponse<T> = Promise<ServiceResponse<T>>;
