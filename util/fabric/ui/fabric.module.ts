import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FabricBadgeModule } from 'util/fabric/ui/badge/fabric-badge.module';
import { FabricButtonModule } from 'util/fabric/ui/button/fabric-button.module';
import { FabricButtonGroupModule } from 'util/fabric/ui/button-group/fabric-button-group.module';
import { FabricCheckboxModule } from 'util/fabric/ui/checkbox/fabric-checkbox.module';
import { FabricChipModule } from 'util/fabric/ui/chip/fabric-chip.module';
import { FabricProgressBarModule } from 'util/fabric/ui/progress-bar/fabric-progress-bar.module';
import { FabricProgressSpinnerModule } from 'util/fabric/ui/progress-spinner/fabric-progress-spinner.module';
import { FabricRadioButtonModule } from 'util/fabric/ui/radio-button/fabric-radio-button.module';
import { FabricRadioGroupModule } from 'util/fabric/ui/radio-group/fabric-radio-group.module';
import { FabricSpinnerModule } from 'util/fabric/ui/spinner/fabric-spinner.module';
import { FabricToggleButtonModule } from 'util/fabric/ui/toggle-button/fabric-toggle-button.module';

@NgModule({
    imports: [
        CommonModule,
        FabricBadgeModule,
        FabricButtonModule,
        FabricButtonGroupModule,
        FabricCheckboxModule,
        FabricChipModule,
        FabricProgressBarModule,
        FabricProgressSpinnerModule,
        FabricRadioButtonModule,
        FabricRadioGroupModule,
        FabricSpinnerModule,
        FabricToggleButtonModule
    ],
    exports: [
        FabricBadgeModule,
        FabricButtonModule,
        FabricButtonGroupModule,
        FabricCheckboxModule,
        FabricChipModule,
        FabricProgressBarModule,
        FabricProgressSpinnerModule,
        FabricRadioButtonModule,
        FabricRadioGroupModule,
        FabricSpinnerModule,
        FabricToggleButtonModule

    ],
    providers: []
})
export class FabricModule {
}
