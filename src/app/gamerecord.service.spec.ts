import { TestBed } from '@angular/core/testing';

import { GamerecordService } from './gamerecord.service';

describe('GamerecordService', () => {
  let service: GamerecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GamerecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
