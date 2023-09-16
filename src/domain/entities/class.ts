import { StudentInfo } from "./student";

export class Classroom {
    public classRoomId: number;
    public classRoomName: string;
    public classRoomNumberStudents: string;
    public classRoomStudent: StudentInfo;

  
    constructor(classRoomId: number, classRoomName: string, classRoomNumberStudents: string, classRoomStudent: StudentInfo) {
      this.classRoomId = classRoomId;
      this.classRoomName = classRoomName;
      this.classRoomNumberStudents = classRoomNumberStudents;
      this.classRoomStudent = classRoomStudent;
    }
  }