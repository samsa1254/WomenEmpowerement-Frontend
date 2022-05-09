import { TestBed } from '@angular/core/testing';

<<<<<<< HEAD
import { PostsService } from './posts.service';

describe('PostsService', () => {
  let service: PostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostsService);
=======
import { postsService } from './posts.service';

describe('PostsService', () => {
  let service: postsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(postsService);
>>>>>>> 99a929978bfe485d30c478ad80362f0ff908f0a1
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
