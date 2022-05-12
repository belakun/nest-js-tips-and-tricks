export declare class Employee {
    id: string;
    name: string;
    subordinates?: Employee[];
    supervisor: Employee;
}
