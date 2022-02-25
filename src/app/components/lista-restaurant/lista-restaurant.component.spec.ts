import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRestaurantComponent } from './lista-restaurant.component';

describe('ListaRestaurantComponent', () => {
  let component: ListaRestaurantComponent;
  let fixture: ComponentFixture<ListaRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaRestaurantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
