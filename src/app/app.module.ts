import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { FibCalcComponent } from './fib-calc';
import { FibInputComponent } from './fib-input/fib-input.component';

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
        FibCalcComponent,
        FibInputComponent,
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
