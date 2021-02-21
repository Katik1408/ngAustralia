import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import { CrudService } from 'src/app/services/crud.service';
@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css'],
})
export class StudentdetailsComponent implements OnInit {
  students: Student;

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.getAllStudent();
  }

  getAllStudent() {
    this.crudService.getAllStudents().subscribe(
      (data) => {
        this.students = data;
        console.log(data);
      },
      (err) => console.log(err)
    );
  }

  deleteStudent(id) {
    this.crudService.deleteStudent(id).subscribe(
      (data) => console.log(data),
      (err) => console.log(err)
    );
  }
}
