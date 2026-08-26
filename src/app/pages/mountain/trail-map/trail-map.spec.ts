import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrailMap } from './trail-map';

describe('TrailMap', () => {
  let component: TrailMap;
  let fixture: ComponentFixture<TrailMap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrailMap],
    }).compileComponents();

    fixture = TestBed.createComponent(TrailMap);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
