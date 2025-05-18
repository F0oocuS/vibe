import { Routes } from '@angular/router';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

export const routes: Routes = [
	{
		path: '',
		component: GamePageComponent
	},
	{
		path: '**',
		component: NotFoundPageComponent
	}
];
