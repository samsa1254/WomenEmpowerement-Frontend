import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventModifyComponent } from './event-modify.component';

describe('EventModifyComponent', () => {
  let component: EventModifyComponent;
  let fixture: ComponentFixture<EventModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
