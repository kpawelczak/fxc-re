import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TechnicalsComponent } from './technicals.component';

import { SimpleUIModule } from '../ui/simple-ui.module';

@NgModule({
	imports: [
		CommonModule,
		SimpleUIModule,
		ReactiveFormsModule
	],
	declarations: [
		TechnicalsComponent
	],
	exports: [
		TechnicalsComponent
	]
})
export class TechnicalsModule {
}
