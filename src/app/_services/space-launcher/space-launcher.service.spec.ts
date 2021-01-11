import { TestBed } from '@angular/core/testing';

import { SpaceLauncherService } from './space-launcher.service';

describe('SpaceLauncherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpaceLauncherService = TestBed.get(SpaceLauncherService);
    expect(service).toBeTruthy();
  });
});
