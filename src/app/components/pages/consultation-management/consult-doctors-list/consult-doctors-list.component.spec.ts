import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultDoctorsListComponent } from './consult-doctors-list.component';

describe('ConsultDoctorsListComponent', () => {
  let component: ConsultDoctorsListComponent;
  let fixture: ComponentFixture<ConsultDoctorsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultDoctorsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultDoctorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
