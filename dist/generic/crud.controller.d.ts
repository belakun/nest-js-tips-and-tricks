import type { Type } from '@nestjs/common';
import type { ClassConstructor } from 'class-transformer';
import type { ICrudController } from 'src/contracts/generic/crud-controller.interface';
export interface ICrudControllerConfig<TService> {
    service: ClassConstructor<TService>;
}
export declare function CrudController<TService, TEntity>(service: ClassConstructor<TService>): Type<ICrudController<TService, TEntity>>;
