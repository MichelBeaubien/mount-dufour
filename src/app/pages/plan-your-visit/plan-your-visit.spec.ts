import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlanYourVisit } from './plan-your-visit';

describe('PlanYourVisit', () => {
  let component: PlanYourVisit;
  let fixture: ComponentFixture<PlanYourVisit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanYourVisit],
    }).compileComponents();

    fixture = TestBed.createComponent(PlanYourVisit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
