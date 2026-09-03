import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Mountain } from './mountain';

describe('Mountain', () => {
    let component: Mountain;
    let fixture: ComponentFixture<Mountain>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [Mountain]
        }).compileComponents();

        fixture = TestBed.createComponent(Mountain);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
