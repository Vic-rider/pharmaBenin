import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultMinesListComponent } from './consult-mines-list.component';

describe('ConsultMinesListComponent', () => {
  let component: ConsultMinesListComponent;
  let fixture: ComponentFixture<ConsultMinesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultMinesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultMinesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
