import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CagnottesComponent } from './cagnottes.component';

describe('CagnottesComponent', () => {
  let component: CagnottesComponent;
  let fixture: ComponentFixture<CagnottesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CagnottesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CagnottesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
