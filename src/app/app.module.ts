import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { FibCalc } from './fib-calc/fib-calc.component';

@NgModule({
  declarations: [
    AppComponent,
    FibCalc,
  ],
  imports: [
   BrowserModule,
   FormsModule,
  ],
    providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
