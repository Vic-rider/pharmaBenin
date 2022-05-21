import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmaOneComponent } from './pharma-one.component';

describe('PharmaOneComponent', () => {
  let component: PharmaOneComponent;
  let fixture: ComponentFixture<PharmaOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmaOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmaOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
