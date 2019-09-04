import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SimpleUIModule } from './ui/simple-ui.module';

import { AppComponent } from './app.component';

import { PositionsTableComponent } from './positions-table/positions-table.component';

import { HeaderComponent } from './header/header.component';

import { TechnicalsModule } from './technicals/technicals.module';


@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		SimpleUIModule,
		TechnicalsModule
	],

	declarations: [
		AppComponent,
		PositionsTableComponent,
		HeaderComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
