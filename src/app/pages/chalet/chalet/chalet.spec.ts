import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Chalet } from './chalet';

describe('Chalet', () => {
    let component: Chalet;
    let fixture: ComponentFixture<Chalet>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [Chalet]
        }).compileComponents();

        fixture = TestBed.createComponent(Chalet);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
