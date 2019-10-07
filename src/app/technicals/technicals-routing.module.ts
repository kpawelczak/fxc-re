import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TechnicalsComponent } from './technicals.component';


const routes = [{
	path: '',
	component: TechnicalsComponent
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
export class TechnicalsRoutingModule {

}
