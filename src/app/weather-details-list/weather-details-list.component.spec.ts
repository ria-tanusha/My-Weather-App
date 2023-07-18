import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDetailsListComponent } from './weather-details-list.component';

describe('WeatherDetailsListComponent', () => {
  let component: WeatherDetailsListComponent;
  let fixture: ComponentFixture<WeatherDetailsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherDetailsListComponent]
    });
    fixture = TestBed.createComponent(WeatherDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
