import { TestBed } from '@angular/core/testing';

import { FazendaService } from './fazenda.service';

describe('FazendaService', () => {
  let service: FazendaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FazendaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
