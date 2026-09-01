import { TestBed } from '@angular/core/testing';
import { LiftTickets } from './lift-tickets';

describe('LiftTickets', () => {
  let service: LiftTickets;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LiftTickets);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
