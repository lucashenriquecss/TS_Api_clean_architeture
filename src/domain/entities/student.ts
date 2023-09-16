

export class StudentInfo {
    public studentId: number;
    public studentName: string;
    public studentAge: number;
    public studentEmail: string;
    public studentGrade: number;

  
    constructor(studentId: number, studentName: string,studentAge:number,studentEmail:string, studentGrade: number) {
      this.studentId = studentId;
      this.studentName = studentName;
      this.studentAge = studentAge;
      this.studentEmail = studentEmail;
      this.studentGrade = studentGrade;
    }
  }