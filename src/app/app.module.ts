import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HeaderModule } from './header/header.module';

import { TechnicalsModule } from './technicals/technicals.module';
import { PositionsModule } from './positions/positions.module';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { TimezoneComponent } from './util/timezone/timezone.component';
import { CommonModule } from '@angular/common';


@NgModule({
	imports: [
		TechnicalsModule,
		PositionsModule,
		HeaderModule,
		RouterModule.forRoot(routes),
		CommonModule
	],
	declarations: [
		AppComponent,
		TimezoneComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
