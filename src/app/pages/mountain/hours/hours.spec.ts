import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Hours } from './hours';

describe('Hours', () => {
  let component: Hours;
  let fixture: ComponentFixture<Hours>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hours],
    }).compileComponents();

    fixture = TestBed.createComponent(Hours);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
