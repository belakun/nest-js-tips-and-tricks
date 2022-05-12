export interface ITypedError {
    type: any;
}
export interface IApplicationError extends ITypedError {
    get message(): string;
}
