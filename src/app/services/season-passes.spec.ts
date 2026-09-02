import { TestBed } from '@angular/core/testing';
import { SeasonPassesService } from './season-passes';

describe('SeasonPassesService', () => {
    let service: SeasonPassesService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(SeasonPassesService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
