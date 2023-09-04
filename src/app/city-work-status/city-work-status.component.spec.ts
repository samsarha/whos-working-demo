import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityWorkStatusComponent } from './city-work-status.component';

describe('CityWorkStatusComponent', () => {
  let component: CityWorkStatusComponent;
  let fixture: ComponentFixture<CityWorkStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityWorkStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityWorkStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
