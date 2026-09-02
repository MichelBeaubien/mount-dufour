import { TestBed } from '@angular/core/testing';
import { FoodDrinkService } from './food-drink';

describe('FoodDrinkService', () => {
    let service: FoodDrinkService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(FoodDrinkService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
