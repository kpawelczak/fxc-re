import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FabricBadgeComponent } from './badge.componet';

@NgModule({
    declarations: [
        FabricBadgeComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        FabricBadgeComponent
    ]
})
export class FabricBadgeModule { }
