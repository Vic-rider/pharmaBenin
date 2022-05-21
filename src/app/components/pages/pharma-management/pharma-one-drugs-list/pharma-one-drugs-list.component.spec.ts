import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmaOneDrugsListComponent } from './pharma-one-drugs-list.component';

describe('PharmaOneDrugsListComponent', () => {
  let component: PharmaOneDrugsListComponent;
  let fixture: ComponentFixture<PharmaOneDrugsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmaOneDrugsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmaOneDrugsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
