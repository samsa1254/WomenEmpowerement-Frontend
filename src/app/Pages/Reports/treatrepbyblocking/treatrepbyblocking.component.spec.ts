import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatrepbyblockingComponent } from './treatrepbyblocking.component';

describe('TreatrepbyblockingComponent', () => {
  let component: TreatrepbyblockingComponent;
  let fixture: ComponentFixture<TreatrepbyblockingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreatrepbyblockingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreatrepbyblockingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
