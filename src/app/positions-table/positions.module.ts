import { NgModule } from '@angular/core';
import { SimpleUIModule } from '../ui/simple-ui.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PositionsComponent } from './positions.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
	imports: [
		CommonModule,
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
