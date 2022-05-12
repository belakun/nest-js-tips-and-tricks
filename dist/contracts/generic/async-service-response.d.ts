import type { IApplicationError } from '../errors/application-error.interface';
export declare type SuccessResponse<T> = [null, T];
export declare type FailureResponse = [IApplicationError];
export declare type ServiceResponse<T> = SuccessResponse<T> | FailureResponse;
export declare type AsyncServiceResponse<T> = Promise<ServiceResponse<T>>;
