import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderMedicineToPharmaComponent } from './order-medicine-to-pharma.component';

describe('OrderMedicineToPharmaComponent', () => {
  let component: OrderMedicineToPharmaComponent;
  let fixture: ComponentFixture<OrderMedicineToPharmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderMedicineToPharmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderMedicineToPharmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
