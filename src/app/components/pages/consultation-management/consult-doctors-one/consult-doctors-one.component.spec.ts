import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultDoctorsOneComponent } from './consult-doctors-one.component';

describe('ConsultDoctorsOneComponent', () => {
  let component: ConsultDoctorsOneComponent;
  let fixture: ComponentFixture<ConsultDoctorsOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultDoctorsOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultDoctorsOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
