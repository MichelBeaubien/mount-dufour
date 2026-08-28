import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrimaryHero } from './primary-hero';

describe('PrimaryHero', () => {
  let component: PrimaryHero;
  let fixture: ComponentFixture<PrimaryHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimaryHero],
    }).compileComponents();

    fixture = TestBed.createComponent(PrimaryHero);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
