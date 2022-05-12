import type { Type } from '@nestjs/common';
import { Body, Delete, Get, Inject, Param, Patch, Post } from '@nestjs/common';
import type { ClassConstructor } from 'class-transformer';
import { IErrorsService, TErrorsService } from 'src/contracts/errors/errors-service.interface';
import type { ICrudController } from 'src/contracts/generic/crud-controller.interface';
import { ICrudService } from 'src/contracts/generic/crud-service.interface';

export interface ICrudControllerConfig<TService> {
  service: ClassConstructor<TService>;
}

export function CrudController<TService, TEntity>(
  service: ClassConstructor<TService>
): Type<ICrudController<TService, TEntity>> {
  class CrudControllerHost implements ICrudController<TService, TEntity> {
    @Inject(service) service: ICrudService<TEntity>;
    @Inject(TErrorsService) errors: IErrorsService;

    @Get()
    async getAll(): Promise<any[]> {
      const [failure, success] = await this.service.findMany();

      if (failure) {
        this.errors.get(failure);
      }

      return success;
    }

    @Get(':id')
    async getOne(@Param('id') id: string): Promise<any> {
      const [failure, success] = await this.service.findOne(id);

      if (failure) {
        this.errors.get(failure);
      }

      return success;
    }

    @Post()
    async create(@Body() data: any): Promise<any> {
      throw new Error('Method not implemented.');
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() data: any): Promise<any> {
      throw new Error('Method not implemented.');
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
      throw new Error('Method not implemented.');
    }
  }

  return CrudControllerHost;
}
