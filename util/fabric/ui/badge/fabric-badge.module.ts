import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FabricBadgeComponent } from 'util/fabric/ui/badge/badge.componet';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        FabricBadgeComponent
    ],
    exports: [
        FabricBadgeComponent
    ]
})
export class FabricBadgeModule { }
