import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TechnicalsComponent } from './technicals.component';

const routes =[{
	path:'technicals',
component:TechnicalsComponent}
]

@NgModule({
	imports:[
		CommonModule,
		RouterModule.forRoot(routes)
	]
})
export class TechnicalsRoutingModule {

}
