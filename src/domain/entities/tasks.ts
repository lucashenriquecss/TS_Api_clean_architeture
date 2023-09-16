import { StudentInfo } from "./student";

export class Task{
    public id: number;
  public title: string;
  public description: string;
  public completed: boolean;
  public dueDate: Date;
  public studentInfo: StudentInfo; // Novo campo para informações do aluno

  constructor(
    id: number,
    title: string,
    description: string,
    completed: boolean = false,
    dueDate: Date,
    studentInfo: StudentInfo // Adicione as informações do aluno como parâmetro
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.completed = completed;
    this.dueDate = dueDate;
    this.studentInfo = studentInfo; // Inicialize o novo campo
  }

  // Métodos de domínio para manipular a tarefa
  public markAsCompleted(): void {
    this.completed = true;
  }

  public markAsIncomplete(): void {
    this.completed = false;
  }

  public updateDetails(newTitle: string, newDescription: string): void {
    this.title = newTitle;
    this.description = newDescription;
  }
}