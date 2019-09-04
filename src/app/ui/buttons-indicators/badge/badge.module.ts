import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BadgeComponent } from 'src/app/ui/buttons-indicators/badge/badge.componet';


@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		BadgeComponent
	],
	exports: [
		BadgeComponent
	]
})
export class BadgeModule {
}
