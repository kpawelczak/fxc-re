import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FabricCheckboxComponent } from 'util/fabric/ui/checkbox/checkbox.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        FabricCheckboxComponent
    ],
    exports: [
        FabricCheckboxComponent
    ]
})
export class FabricCheckboxModule { }
