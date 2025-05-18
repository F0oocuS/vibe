import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { NotFoundPageComponent } from './not-found-page.component';

describe('NotFoundPageComponent', () => {
	let component: NotFoundPageComponent;
	let fixture: ComponentFixture<NotFoundPageComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [NotFoundPageComponent, RouterModule]
		}).compileComponents();

		fixture = TestBed.createComponent(NotFoundPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should have a link to home page', () => {
		const compiled = fixture.nativeElement as HTMLElement;
		const link = compiled.querySelector('.not-found-page__link');
		expect(link?.getAttribute('routerLink')).toBe('/');
	});
}); 