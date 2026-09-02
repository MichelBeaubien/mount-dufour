import { TestBed } from '@angular/core/testing';
import { RentalsService } from './rentals';

describe('RentalsService', () => {
    let service: RentalsService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(RentalsService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
