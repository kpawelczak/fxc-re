import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SimpleUIModule } from '../ui/simple-ui.module';
import { TechnicalsComponent } from './technicals.component';
import { TechnicalsRoutingModule } from './technicals-routing.module';


@NgModule({
	imports: [
		CommonModule,
		TechnicalsRoutingModule,
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
