import type { Type } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import type { ClassConstructor } from 'class-transformer';
import type { AsyncServiceResponse } from 'src/contracts/generic/async-service-response';
import type { ICrudService } from 'src/contracts/generic/crud-service.interface';
import { ApplicationError } from 'src/errors/application.error';

import type { TreeRepository } from 'typeorm';
import { Repository } from 'typeorm';

export function CrudService<TEntity>(entity: ClassConstructor<TEntity>): Type<ICrudService<TEntity>> {
  class CrudServiceHost implements ICrudService<TEntity> {
    @InjectRepository(entity) repo: Repository<TEntity>;
    treeRepo: TreeRepository<TEntity>;

    async findOne(id: string): AsyncServiceResponse<TEntity> {
      try {
        return [null, await this.repo.findOneOrFail(id)];
      } catch (error) {
        return [new ApplicationError(`Communication not found communication`)];
      }
    }

    async findMany(): AsyncServiceResponse<TEntity[]> {
      try {
        return [null, await this.repo.find()];
      } catch (error) {
        return [new ApplicationError(`Communication not found communication`)];
      }
    }

    async createUniqueOrFail(data: any): AsyncServiceResponse<TEntity> {
      throw new Error('Method not implemented.');
    }

    async updateUniqueOrFail(id: string, changes: any): AsyncServiceResponse<TEntity> {
      throw new Error('Method not implemented.');
    }

    async find(): Promise<TEntity[]> {
      return this.repo.find();
    }
  }

  return CrudServiceHost;
}
