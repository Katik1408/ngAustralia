import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Student } from 'src/app/models/student.model';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  apiURL = environment.apiURL;
  STUDENTS = 'api/students';

  constructor(private httpClient: HttpClient) {}

  //HTTPGET
  //
  getAllStudents(): Observable<Student> {
    return this.httpClient.get<Student>(`${this.apiURL}${this.STUDENTS}`);
  }
  //HTTP POST

  createNewStudent(student): Observable<Student> {
    return this.httpClient.post<Student>(
      `${this.apiURL}${this.STUDENTS}`,
      student
    );
  }

  //HTTPDelete

  deleteStudent(id) {
    return this.httpClient.delete(`${this.apiURL}${this.STUDENTS}/${id}`);
  }
}
