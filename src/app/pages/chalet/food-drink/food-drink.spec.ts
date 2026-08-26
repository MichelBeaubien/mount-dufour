import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FoodDrink } from './food-drink';

describe('FoodDrink', () => {
  let component: FoodDrink;
  let fixture: ComponentFixture<FoodDrink>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodDrink],
    }).compileComponents();

    fixture = TestBed.createComponent(FoodDrink);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
