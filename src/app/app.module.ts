import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';

import { TechnicalsModule } from './technicals/technicals.module';
import { PositionsModule } from './positions/positions.module';


@NgModule({
	imports: [
		TechnicalsModule,
		PositionsModule
	],
	declarations: [
		AppComponent,
		HeaderComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
