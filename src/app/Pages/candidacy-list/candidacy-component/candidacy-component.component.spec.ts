import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidacyComponentComponent } from './candidacy-component.component';

describe('CandidacyComponentComponent', () => {
  let component: CandidacyComponentComponent;
  let fixture: ComponentFixture<CandidacyComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidacyComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidacyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
