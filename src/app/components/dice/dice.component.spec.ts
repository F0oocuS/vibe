import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DiceComponent } from './dice.component';

describe('DiceComponent', () => {
	let component: DiceComponent;
	let fixture: ComponentFixture<DiceComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [DiceComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(DiceComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should have default value of 1', () => {
		expect(component.value).toBe(1);
	});

	it('should update data-value attribute when value changes', () => {
		const testValue = 6;
		component.value = testValue;
		fixture.detectChanges();

		const faceElement = fixture.nativeElement.querySelector('.dice__face');
		expect(faceElement.getAttribute('data-value')).toBe(testValue.toString());
	});

	it('should render correct number of dots', () => {
		const testValue = 4;
		component.value = testValue;
		fixture.detectChanges();

		const dots = fixture.nativeElement.querySelectorAll('.dice__dot');
		expect(dots.length).toBe(testValue);
	});
}); 