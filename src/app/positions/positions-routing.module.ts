import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PositionsComponent } from './positions.component';


const routes = [{
	path: 'positions',
	component: PositionsComponent
}];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(routes)
	],
	exports: [
		RouterModule
	]
})
export class PositionsRoutingModule {
}
