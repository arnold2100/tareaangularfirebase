import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearRestaurantComponent } from './crear-restaurant.component';

describe('CrearRestaurantComponent', () => {
  let component: CrearRestaurantComponent;
  let fixture: ComponentFixture<CrearRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearRestaurantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
