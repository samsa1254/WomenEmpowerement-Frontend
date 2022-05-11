import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidacyUpdateComponent } from './candidacy-update.component';

describe('CandidacyUpdateComponent', () => {
  let component: CandidacyUpdateComponent;
  let fixture: ComponentFixture<CandidacyUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidacyUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidacyUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
