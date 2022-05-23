import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultDoctorFavoritesComponent } from './consult-doctor-favorites.component';

describe('ConsultDoctorFavoritesComponent', () => {
  let component: ConsultDoctorFavoritesComponent;
  let fixture: ComponentFixture<ConsultDoctorFavoritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultDoctorFavoritesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultDoctorFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
