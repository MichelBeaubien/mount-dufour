import { TestBed } from '@angular/core/testing';
import { SponsorsService } from './sponsors';

describe('SponsorsService', () => {
    let service: SponsorsService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(SponsorsService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
