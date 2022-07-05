/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PharmaService } from './pharma.service';

describe('Service: Pharma', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PharmaService]
    });
  });

  it('should ...', inject([PharmaService], (service: PharmaService) => {
    expect(service).toBeTruthy();
  }));
});
