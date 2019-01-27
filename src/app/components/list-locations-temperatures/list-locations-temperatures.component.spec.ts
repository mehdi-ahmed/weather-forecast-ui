import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLocationsTemperaturesComponent } from './list-locations-temperatures.component';

describe('ListLocationsTemperaturesComponent', () => {
  let component: ListLocationsTemperaturesComponent;
  let fixture: ComponentFixture<ListLocationsTemperaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLocationsTemperaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLocationsTemperaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
