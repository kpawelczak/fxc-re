import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { PositionsTableComponent } from './positions-table/positions-table.component';
import { TechnicalsCalculationsComponent } from './technicals/technicals-calculations';
import { TechnicalsComponent } from './technicals/technicals.component';

import { FabricModule } from 'util/fabric/ui/fabric.module';
import { HeaderComponent } from './header/header.component';

@NgModule({

	imports: [
		BrowserModule,
		FormsModule,
		FabricModule
	],

	declarations: [
		AppComponent,
		PositionsTableComponent,
		TechnicalsCalculationsComponent,
		TechnicalsComponent,
		HeaderComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
