import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDatailsComponent } from './event-datails.component';

describe('EventDatailsComponent', () => {
  let component: EventDatailsComponent;
  let fixture: ComponentFixture<EventDatailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventDatailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
