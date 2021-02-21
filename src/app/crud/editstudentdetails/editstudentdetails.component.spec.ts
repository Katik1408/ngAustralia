import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditstudentdetailsComponent } from './editstudentdetails.component';

describe('EditstudentdetailsComponent', () => {
  let component: EditstudentdetailsComponent;
  let fixture: ComponentFixture<EditstudentdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditstudentdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditstudentdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
