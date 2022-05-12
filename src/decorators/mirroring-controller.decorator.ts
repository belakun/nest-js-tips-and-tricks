import type { ControllerOptions } from '@nestjs/common';
import { applyDecorators, Controller } from '@nestjs/common';

// Uses folder structure to mirror resource path
export const MirroringController = (options: ControllerOptions = {}): ClassDecorator => {
  const root = 'dist';
  let calculatedPath: string | string[] = options.path;

  if (typeof options.path === 'string') {
    calculatedPath = options.path.split(root)[1];
  }

  return applyDecorators(Controller({ ...options, path: calculatedPath }));
};
