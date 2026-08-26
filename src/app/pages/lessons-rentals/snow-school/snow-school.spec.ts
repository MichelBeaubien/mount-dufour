import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SnowSchool } from './snow-school';

describe('SnowSchool', () => {
  let component: SnowSchool;
  let fixture: ComponentFixture<SnowSchool>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnowSchool],
    }).compileComponents();

    fixture = TestBed.createComponent(SnowSchool);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
