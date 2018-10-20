import { TestBed } from '@angular/core/testing';

import { FriendsStorageService } from './friends-storage.service';

describe('FriendsStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FriendsStorageService = TestBed.get(FriendsStorageService);
    expect(service).toBeTruthy();
  });
});
