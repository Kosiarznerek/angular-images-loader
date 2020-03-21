import {TestBed} from '@angular/core/testing';

import {DataImagesService} from './data-images.service';

describe('DataImagesService', () => {
  let service: DataImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataImagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
