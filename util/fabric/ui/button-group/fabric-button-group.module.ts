import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FabricButtonGroupComponent } from 'util/fabric/ui/button-group/button-group.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        FabricButtonGroupComponent
    ],
    exports: [
        FabricButtonGroupComponent
    ]
})
export class FabricButtonGroupModule { }
