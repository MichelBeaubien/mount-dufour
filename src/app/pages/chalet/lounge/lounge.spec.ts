import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lounge } from './lounge';

describe('Lounge', () => {
    let component: Lounge;
    let fixture: ComponentFixture<Lounge>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [Lounge]
        }).compileComponents();

        fixture = TestBed.createComponent(Lounge);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
