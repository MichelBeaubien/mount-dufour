import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LessonsRentals } from './lessons-rentals';

describe('LessonsRentals', () => {
  let component: LessonsRentals;
  let fixture: ComponentFixture<LessonsRentals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonsRentals],
    }).compileComponents();

    fixture = TestBed.createComponent(LessonsRentals);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
