import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutesModule } from './homepage-routes.module';
import { HomepageComponent } from './homepage.component';

@NgModule({
	imports: [CommonModule, HomepageRoutesModule],
	declarations: [HomepageComponent],
})
export class HomepageModule {}
