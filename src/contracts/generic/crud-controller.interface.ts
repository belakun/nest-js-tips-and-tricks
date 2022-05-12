import type { IErrorsService } from '../errors/errors-service.interface';
import type { ICrudService } from './crud-service.interface';

export interface ICrudController<TService, TEntity> {
  service: ICrudService<TEntity>;
  errors: IErrorsService;
  getAll(): Promise<any[]>;
  getOne(id: string): Promise<any>;
  create(data: any): Promise<any>;
  update(id: string, data: any): Promise<any>;
  delete(id: string): Promise<void>;
}
