import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { TechCalcComponent } from './tech-calc';
import { TechInputComponent } from './tech-input/tech-input.component';
import { CalcInputComponent } from './calc-input/calc-input.component';

import { FabricModule } from 'util/fabric/ui/fabric.module';

@NgModule({

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FabricModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],

  declarations: [
    AppComponent,
    TechCalcComponent,
    TechInputComponent,
    CalcInputComponent
  ],

  providers: [],
  bootstrap: [AppComponent]

})

export class AppModule {
}
