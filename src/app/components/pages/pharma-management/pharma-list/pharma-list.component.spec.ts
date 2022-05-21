import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmaListComponent } from './pharma-list.component';

describe('PharmaListComponent', () => {
  let component: PharmaListComponent;
  let fixture: ComponentFixture<PharmaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
