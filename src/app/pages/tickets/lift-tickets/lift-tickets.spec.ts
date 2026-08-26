import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LiftTickets } from './lift-tickets';

describe('LiftTickets', () => {
  let component: LiftTickets;
  let fixture: ComponentFixture<LiftTickets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiftTickets],
    }).compileComponents();

    fixture = TestBed.createComponent(LiftTickets);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
