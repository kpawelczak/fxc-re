import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SimpleUIModule } from '../ui/simple-ui.module';

import { PositionsComponent } from './positions.component';
import { PositionsRoutingModule } from './positions-routing.module';
import { PositionDataService } from './position-data/position-data.service';
import { PositionCreator } from './position/position.creator';
import { DemoTable } from './demo/demo.component';


@NgModule({
	imports: [
		CommonModule,
		PositionsRoutingModule,
		FormsModule,
		SimpleUIModule,
		ReactiveFormsModule
	],
	declarations: [
		PositionsComponent
	],
	exports: [
		PositionsComponent
	],
	providers: [
		PositionDataService,
		PositionCreator,
		DemoTable
	]
})
export class PositionsModule {
}
