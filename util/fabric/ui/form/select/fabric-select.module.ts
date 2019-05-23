import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FabricSelectComponent } from 'util/fabric/ui/form/select/select.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		FabricSelectComponent
	],
	exports: [
		FabricSelectComponent
	]
})
export class FabricSelectModule {
}
