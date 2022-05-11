import { TestBed } from '@angular/core/testing';


import { postsService } from './posts.service';

describe('PostsService', () => {
  let service: postsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(postsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
