import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HeaderModule } from './header/header.module';

import { TechnicalsModule } from './technicals/technicals.module';
import { PositionsModule } from './positions/positions.module';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';


@NgModule({
	imports: [
		TechnicalsModule,
		PositionsModule,
		HeaderModule,
		RouterModule.forRoot(routes)
	],
	declarations: [
		AppComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
