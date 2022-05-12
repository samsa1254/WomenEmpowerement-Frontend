import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCagnottesComponent } from './details-cagnottes.component';

describe('DetailsCagnottesComponent', () => {
  let component: DetailsCagnottesComponent;
  let fixture: ComponentFixture<DetailsCagnottesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsCagnottesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCagnottesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
