import { TestBed, inject } from '@angular/core/testing';

import { MatNumberSpinnerService } from './mat-number-spinner.service';

describe('MatNumberSpinnerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatNumberSpinnerService]
    });
  });

  it('should be created', inject([MatNumberSpinnerService], (service: MatNumberSpinnerService) => {
    expect(service).toBeTruthy();
  }));
});
