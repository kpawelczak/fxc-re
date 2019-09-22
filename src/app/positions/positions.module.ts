import { NgModule } from '@angular/core';
import { SimpleUIModule } from '../ui/simple-ui.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PositionsComponent } from './positions.component';
import { BrowserModule } from '@angular/platform-browser';
import { PositionsRoutingModule } from './positions-routing.module';


@NgModule({
	imports: [
		CommonModule,
		PositionsRoutingModule,
		BrowserModule,
		FormsModule,
		SimpleUIModule,
		ReactiveFormsModule
	],
	declarations: [
		PositionsComponent
	],
	exports: [
		PositionsComponent
	]
})
export class PositionsModule {
}
