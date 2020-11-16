import { TestBed } from '@angular/core/testing';

import { TalhaoService } from './talhao.service';

describe('TalhaoService', () => {
  let service: TalhaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TalhaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
