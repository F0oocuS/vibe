import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type DiceColor = 'red' | 'blue' | 'yellow' | 'green' | 'purple';

@Component({
	selector: 'app-dice',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './dice.component.html',
	styleUrls: ['./dice.component.scss']
})
export class DiceComponent {
	@Input() value: number = 1;
	@Input() color: DiceColor = 'red';
} 