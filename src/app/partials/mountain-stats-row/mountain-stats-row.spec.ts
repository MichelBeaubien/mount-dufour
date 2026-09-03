import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MountainStatsRow } from './mountain-stats-row';

describe('MountainStatsRow', () => {
  let component: MountainStatsRow;
  let fixture: ComponentFixture<MountainStatsRow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MountainStatsRow],
    }).compileComponents();

    fixture = TestBed.createComponent(MountainStatsRow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
