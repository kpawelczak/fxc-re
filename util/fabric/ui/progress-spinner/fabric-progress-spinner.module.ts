import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FabricProgressSpinnerComponent } from 'util/fabric/ui/progress-spinner/progress-spinner.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        FabricProgressSpinnerComponent,
    ],
    exports: [
        FabricProgressSpinnerComponent,
    ]
})
export class FabricProgressSpinnerModule { }
