import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

import { AppComponent } from './app.component';

import { HeaderModule } from './header/header.module';
import { TechnicalsModule } from './technicals/technicals.module';
import { PositionsModule } from './positions/positions.module';

import { MarketSessionsComponent } from './util/market-sessions/market-sessions.component';


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
		MarketSessionsComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
