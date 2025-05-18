import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameComponent } from './game.component';
import { DiceComponent } from '../dice/dice.component';

describe('GameComponent', () => {
	let component: GameComponent;
	let fixture: ComponentFixture<GameComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [GameComponent, DiceComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(GameComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should render 9 dice components', () => {
		const diceElements = fixture.nativeElement.querySelectorAll('app-dice');
		expect(diceElements.length).toBe(9);
	});

	it('should initialize all dice with value 1', () => {
		expect(component.diceValues).toEqual(Array(9).fill(1));
	});
}); 