/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ViveroService } from './vivero.service';

describe('Service: Vivero', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViveroService]
    });
  });

  it('should ...', inject([ViveroService], (service: ViveroService) => {
    expect(service).toBeTruthy();
  }));
});
