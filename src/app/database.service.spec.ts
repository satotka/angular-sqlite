import { TestBed } from '@angular/core/testing';

import { DatabaseService } from './database.service';

describe('DatabaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatabaseService = TestBed.get(DatabaseService);
    expect(service).toBeTruthy();
  });

  it('shoule be execute ddl', () => {
    const service: DatabaseService = TestBed.get(DatabaseService);
    service.executeDDL("CREATE TABLE MyTable (SampleColumn)");
  });
});
