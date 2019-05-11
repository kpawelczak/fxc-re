import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FabricBadgeModule } from 'util/fabric/ui/buttons-indicators/badge/fabric-badge.module';
import { FabricButtonModule } from 'util/fabric/ui/buttons-indicators/button/fabric-button.module';
import { FabricButtonGroupModule } from 'util/fabric/ui/buttons-indicators/button-group/fabric-button-group.module';
import { FabricCardModule } from 'util/fabric/ui/layout/card/fabric-card.module';
import { FabricCheckboxModule } from 'util/fabric/ui/form/checkbox/fabric-checkbox.module';
import { FabricChipModule } from 'util/fabric/ui/buttons-indicators/chip/fabric-chip.module';
import { FabricProgressBarModule } from 'util/fabric/ui/progress-bar/fabric-progress-bar.module';
import { FabricProgressSpinnerModule } from 'util/fabric/ui/spinners/progress-spinner/fabric-progress-spinner.module';
import { FabricRadioButtonModule } from 'util/fabric/ui/form/radio-button/fabric-radio-button.module';
import { FabricRadioGroupModule } from 'util/fabric/ui/form/radio-group/fabric-radio-group.module';
import { FabricSelectModule } from 'util/fabric/ui/form/select/fabric-select.module';
import { FabricSpinnerModule } from 'util/fabric/ui/spinners/spinner/fabric-spinner.module';
import { FabricToggleButtonModule } from 'util/fabric/ui/buttons-indicators/toggle-button/fabric-toggle-button.module';
import { FabricInputModule } from 'util/fabric/ui/form/input/fabric-input.module';

const modules = [
	FabricBadgeModule,
	FabricButtonModule,
	FabricButtonGroupModule,
	FabricCardModule,
	FabricCheckboxModule,
	FabricChipModule,
	FabricRadioButtonModule,
	FabricRadioGroupModule,
	FabricProgressBarModule,
	FabricProgressSpinnerModule,
	FabricSelectModule,
	FabricSpinnerModule,
	FabricToggleButtonModule,
	FabricInputModule
];

@NgModule({
	imports: [
		CommonModule,
		...modules
	],
	exports: [
		...modules
	],
	providers: []
})
export class FabricModule {
}
