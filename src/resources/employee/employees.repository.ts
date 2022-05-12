// import { EntityManager, EntityRepository, Repository } from 'typeorm';
// import { Employee } from './entity/employee.entity';

// @EntityRepository(Employee)
// export class EmployeeTreeRepository extends Repository<Employee> {
//   constructor(private entityManager: EntityManager) {
//     super();
//   }

//   async saveEmployeeTree(filters: Employee[]): Promise<Employee> {
//     const savedEntities: Employee[] = [];
//     const queryRunner = this.entityManager.connection.createQueryRunner();

//     await queryRunner.connect();
//     await queryRunner.startTransaction();

//     try {
//       for (const f of filters) {
//         if (f.manager) {
//           f.manager = savedEntities.find(e => e.id === f.manager.id);
//         }

//         const saved = await queryRunner.manager.save(f);

//         savedEntities.push(saved);
//       }

//       await queryRunner.commitTransaction();

//       return savedEntities[0];
//     } catch (err) {
//       await queryRunner.rollbackTransaction();
//     } finally {
//       await queryRunner.release();
//     }
//   }

//   /**
//    *  Responsible for finding filter tree.
//    * @param filterId Id of Filter container. Represented by EntityFilterValue entity
//    * @returns EntityFilterCombined A top level parent element including whole filter tree
//    */
//   async getEmployeeTree(root: Employee): Promise<Employee> {
//     const treeRepository = this.entityManager.getTreeRepository(Employee);

//     return treeRepository.findDescendantsTree(root);
//   }
// }
