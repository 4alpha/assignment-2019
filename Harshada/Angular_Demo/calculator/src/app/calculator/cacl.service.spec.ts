import { TestBed } from '@angular/core/testing';

import { CaclService } from './cacl.service';

describe('CaclService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CaclService = TestBed.get(CaclService);
    expect(service).toBeTruthy();
  });

  it('Calculator methods are defined', () => {
    let calc = new CaclService();
    expect(calc.add(1,2)).toBeDefined();
    expect(calc.sub(1,2)).toBeDefined();
    expect(calc.mult(1,2)).toBeDefined();
    expect(calc.div(1,2)).toBeDefined();
  });
});
