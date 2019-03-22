import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FabricProgressBarComponent } from 'util/fabric/ui/progress-bar/progress-bar.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        FabricProgressBarComponent,
    ],
    exports: [
        FabricProgressBarComponent,
    ]
})
export class FabricProgressBarModule { }
