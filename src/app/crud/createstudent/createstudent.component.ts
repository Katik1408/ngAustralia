import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-createstudent',
  templateUrl: './createstudent.component.html',
  styleUrls: ['./createstudent.component.css'],
})
export class CreatestudentComponent implements OnInit {
  student: Student;

  constructor(private crudService: CrudService) {
    this.student = {
      Name:'',
      Age: 0,
      Place: '',
    };
  }

  ngOnInit(): void {}

  submit(student) {
    console.log(student);
    this.crudService.createNewStudent(student).subscribe(
      (data) => {
        console.log(data);
      },
      (err) => console.log(err)
    );
  }
}
