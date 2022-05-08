import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCagnotteComponent } from './add-cagnotte.component';

describe('AddCagnotteComponent', () => {
  let component: AddCagnotteComponent;
  let fixture: ComponentFixture<AddCagnotteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCagnotteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCagnotteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
