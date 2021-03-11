import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'hplatform';
	drawerOpened = true;

	switchDrawer(): void {
		this.drawerOpened = !this.drawerOpened;
	}
}
