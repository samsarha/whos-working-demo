import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesAtWorkComponent } from './cities-at-work.component';

describe('CitiesAtWorkComponent', () => {
  let component: CitiesAtWorkComponent;
  let fixture: ComponentFixture<CitiesAtWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitiesAtWorkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitiesAtWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
