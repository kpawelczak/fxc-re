import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './position-data-table/in-memory-data.service';

import { AppComponent } from './app.component';

import { PositionsTableComponent } from './positions-table/positions-table.component';
import { TechnicalsCalculationsComponent } from './technicals/technicals-calculations';
import { TechnicalsComponent } from './technicals/technicals.component';

import { FabricModule } from 'util/fabric/ui/fabric.module';

@NgModule({

	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		FabricModule,
		HttpClientInMemoryWebApiModule.forRoot(
			InMemoryDataService, { dataEncapsulation: false }
		)
	],

	declarations: [
		AppComponent,
		PositionsTableComponent,
		TechnicalsCalculationsComponent,
		TechnicalsComponent
	],

	providers: [],
	bootstrap: [AppComponent]

})

export class AppModule {
}
