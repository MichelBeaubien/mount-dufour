import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeasonPasses } from './season-passes';

describe('SeasonPasses', () => {
    let component: SeasonPasses;
    let fixture: ComponentFixture<SeasonPasses>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SeasonPasses]
        }).compileComponents();

        fixture = TestBed.createComponent(SeasonPasses);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
