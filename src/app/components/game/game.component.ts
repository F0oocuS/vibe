import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiceComponent, DiceColor } from '../dice/dice.component';

interface DiceState {
	value: number;
	color: DiceColor;
}

@Component({
	selector: 'app-game',
	standalone: true,
	imports: [CommonModule, DiceComponent],
	templateUrl: './game.component.html',
	styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
	diceStates: DiceState[] = [];
	private colors: DiceColor[] = ['red', 'blue', 'yellow', 'green', 'purple'];

	ngOnInit() {
		this.initializeDice();
	}

	private initializeDice() {
		this.diceStates = Array(9).fill(null).map(() => ({
			value: this.getRandomValue(),
			color: this.getRandomColor()
		}));
	}

	private getRandomValue(): number {
		return Math.floor(Math.random() * 6) + 1;
	}

	private getRandomColor(): DiceColor {
		const randomIndex = Math.floor(Math.random() * this.colors.length);
		return this.colors[randomIndex];
	}
} 