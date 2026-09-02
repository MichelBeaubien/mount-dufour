import { TestBed } from '@angular/core/testing';
import { TicketDealsService } from './ticket-deals';

describe('TicketDeals', () => {
    let service: TicketDealsService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(TicketDealsService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
