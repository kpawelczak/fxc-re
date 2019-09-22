import { Routes } from '@angular/router';

export const routes: Routes = [
	{path:'', redirectTo:'/positions', pathMatch:'full'},
	{path:'positions', loadChildren:'./positions/positions.module#PositionsModule'},
	{path:'technicals', loadChildren:'./technicals/technicals.module#TechnicalsModule'}
];
