import { TestBed } from '@angular/core/testing';
import { SnowSchoolService } from './snow-school';

describe('SnowSchoolService', () => {
    let service: SnowSchoolService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(SnowSchoolService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
