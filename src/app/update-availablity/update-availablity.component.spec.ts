import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAvailablityComponent } from './update-availablity.component';

describe('UpdateAvailablityComponent', () => {
  let component: UpdateAvailablityComponent;
  let fixture: ComponentFixture<UpdateAvailablityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAvailablityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAvailablityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
