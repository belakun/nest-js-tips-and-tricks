import type { Repository, TreeRepository } from 'typeorm';
import type { AsyncServiceResponse } from './async-service-response';

export interface ICrudService<TEntity> {
  repo: Repository<TEntity> | TreeRepository<TEntity>;
  findOne(id: string): AsyncServiceResponse<TEntity>;
  findMany(): AsyncServiceResponse<TEntity[]>;
  createUniqueOrFail(data: any): AsyncServiceResponse<TEntity>;
  updateUniqueOrFail(id: string, changes: any): AsyncServiceResponse<TEntity>;
}
