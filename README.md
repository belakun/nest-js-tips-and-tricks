# nest-js-tips-and-tricks

NEST.JS Features implemented in this repository
- Working with hierarchical data with TypeORM ClosureTable implementation
- Mirroring Controller (/src/decorators/mirroring-controller.decorator.ts)
  Allows to mirror folder structure to controller path prefix.
- Type safe Interface based DI (/src/utils/IOC.ts)
  A helper function that provides type check for custom providers.
  See example in /src/errors/errors.module.ts
- Dynamic controller configuration (/src/generic/crud.controller.ts)
- Dynamic Repository injection (/src/generic/crud.service.ts)
- Alternative approach to error handling (/src/errors). Has known issues with http code.