import { Column, Entity, PrimaryGeneratedColumn, Tree, TreeChildren, TreeParent } from 'typeorm';

@Entity()
@Tree('closure-table')
export class Employee {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  name: string;

  @TreeChildren({
    cascade: true,
  })
  subordinates?: Employee[];

  @TreeParent({
    onDelete: 'CASCADE',
  })
  supervisor: Employee;
}
