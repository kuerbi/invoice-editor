import { TestBed, inject } from '@angular/core/testing';

import { InvoiceListService } from './invoice-list.service';

describe('InvoiceListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InvoiceListService]
    });
  });

  it('should be created', inject([InvoiceListService], (service: InvoiceListService) => {
    expect(service).toBeTruthy();
  }));
});
