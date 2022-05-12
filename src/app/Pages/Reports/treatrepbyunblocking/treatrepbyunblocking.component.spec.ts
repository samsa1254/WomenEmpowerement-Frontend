import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatrepbyunblockingComponent } from './treatrepbyunblocking.component';

describe('TreatrepbyunblockingComponent', () => {
  let component: TreatrepbyunblockingComponent;
  let fixture: ComponentFixture<TreatrepbyunblockingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreatrepbyunblockingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreatrepbyunblockingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
