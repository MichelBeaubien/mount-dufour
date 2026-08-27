import { TestBed } from '@angular/core/testing';
import { Mountain } from './mountain';

describe('Mountain', () => {
    let service: Mountain;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(Mountain);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
