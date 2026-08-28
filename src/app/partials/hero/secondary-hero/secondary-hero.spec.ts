import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SecondaryHero } from './secondary-hero';

describe('SecondaryHero', () => {
  let component: SecondaryHero;
  let fixture: ComponentFixture<SecondaryHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondaryHero],
    }).compileComponents();

    fixture = TestBed.createComponent(SecondaryHero);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
