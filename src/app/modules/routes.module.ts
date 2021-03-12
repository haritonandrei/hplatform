import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import ROUTES from 'src/app/configuration/routes';

const routes: Routes = [
	{
		path: ROUTES.homepage,
		loadChildren: () => import('src/app/shared/components/homepage/homepage.module').then(m => m.HomepageModule),
	},
	{ path: '**', redirectTo: ROUTES.homepage, pathMatch: 'full' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: false })],
	exports: [RouterModule],
})
export class RoutesModule {}
