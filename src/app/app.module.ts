import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { FibCalcComponent } from './fib-calc';
import { FibInputComponent } from './fib-input/fib-input.component';

@NgModule({

    imports: [        
        BrowserModule,
        FormsModule,
    ],
    
    declarations: [
        AppComponent,
        FibCalcComponent,
        FibInputComponent,
    ],

    providers: [],
    bootstrap: [AppComponent]

})

export class AppModule { }
