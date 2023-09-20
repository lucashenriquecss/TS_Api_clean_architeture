import { StudentInfo } from "../entities/student";


export interface CreateStudent{
    load: () => Promise<StudentInfo>;
}