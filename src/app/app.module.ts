import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { TechCalcComponent } from './tech-calc';
import { TechInputComponent } from './tech-input/tech-input.component';
import { CalcInputComponent } from './calc-input/calc-input.component';

import { FabricButtonModule } from './ui/button/fabric-button.module';
import { FabricChipModule} from './ui/chip/fabric-chip.module';
import { FabricBadgeModule} from './ui/badge/fabric-badge.module';

@NgModule({

    imports: [
        BrowserModule,
        FormsModule,
        FabricButtonModule,
        FabricBadgeModule,
        FabricChipModule
    ],

    declarations: [
        AppComponent,
        TechCalcComponent,
        TechInputComponent,
        CalcInputComponent,       
    ],
    exports: [
        FabricButtonModule,
        FabricBadgeModule,
        FabricChipModule
    ],

    providers: [],
    bootstrap: [AppComponent]

})

export class AppModule { }
