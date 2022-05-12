import type { MiddlewareConsumer, NestModule } from '@nestjs/common';
import 'reflect-metadata';
export declare class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer): void;
}
