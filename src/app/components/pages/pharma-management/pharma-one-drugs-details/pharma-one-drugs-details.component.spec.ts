import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmaOneDrugsDetailsComponent } from './pharma-one-drugs-details.component';

describe('PharmaOneDrugsDetailsComponent', () => {
  let component: PharmaOneDrugsDetailsComponent;
  let fixture: ComponentFixture<PharmaOneDrugsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmaOneDrugsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmaOneDrugsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
