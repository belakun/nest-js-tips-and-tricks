import { ConflictException, NotFoundException } from '@nestjs/common';
export declare const httpErrors: {
    nothingUpdated: NotFoundException;
    campaignNotFound: NotFoundException;
    buildingNotFound: NotFoundException;
    notUniqueContact: ConflictException;
    contactNotFound: NotFoundException;
    employeeNotFound: NotFoundException;
    statusNotFound: NotFoundException;
};
