import { TestBed } from '@angular/core/testing';
import { Hours } from './hours';

describe('Hours', () => {
    let service: Hours;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(Hours);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
