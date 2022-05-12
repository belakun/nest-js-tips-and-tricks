import type { Type } from '@nestjs/common';
import type { ClassConstructor } from 'class-transformer';
import type { ICrudService } from 'src/contracts/generic/crud-service.interface';
export declare function CrudService<TEntity>(entity: ClassConstructor<TEntity>): Type<ICrudService<TEntity>>;
