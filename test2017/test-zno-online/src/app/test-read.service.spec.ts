/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TestReadService } from './test-read.service';

describe('TestReadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestReadService]
    });
  });

  it('should ...', inject([TestReadService], (service: TestReadService) => {
    expect(service).toBeTruthy();
  }));
});
