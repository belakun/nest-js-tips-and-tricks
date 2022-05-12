// TODO: Get rid of it
import { ConflictException, HttpStatus, NotFoundException } from '@nestjs/common';

export const httpErrors = {
  nothingUpdated: new NotFoundException({
    status: HttpStatus.FORBIDDEN,
    message: 'Nothing was updated',
  }),
  campaignNotFound: new NotFoundException({
    status: HttpStatus.NOT_FOUND,
    message: 'Campaign not found',
  }),
  buildingNotFound: new NotFoundException({
    status: HttpStatus.NOT_FOUND,
    message: 'Building not found',
  }),
  notUniqueContact: new ConflictException({
    status: HttpStatus.CONFLICT,
    message: 'Provided contact already exists',
  }),
  contactNotFound: new NotFoundException({
    status: HttpStatus.NOT_FOUND,
    message: 'Contact not found',
  }),
  employeeNotFound: new NotFoundException({
    status: HttpStatus.NOT_FOUND,
    message: 'Employee not found',
  }),
  statusNotFound: new NotFoundException({
    status: HttpStatus.NOT_FOUND,
    message: 'Status not found',
  }),
};
