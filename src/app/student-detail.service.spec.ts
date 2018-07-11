import { TestBed, inject } from '@angular/core/testing';

import { StudentDetailService } from './student-detail.service';

describe('StudentDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentDetailService]
    });
  });

  it('should be created', inject([StudentDetailService], (service: StudentDetailService) => {
    expect(service).toBeTruthy();
  }));
});
