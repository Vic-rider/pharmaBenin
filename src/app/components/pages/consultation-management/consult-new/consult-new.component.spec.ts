import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultNewComponent } from './consult-new.component';

describe('ConsultNewComponent', () => {
  let component: ConsultNewComponent;
  let fixture: ComponentFixture<ConsultNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
