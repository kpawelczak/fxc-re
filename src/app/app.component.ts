import { Component } from '@angular/core';
import { InputValues } from './input-values';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})


export class AppComponent {

    ivalue= InputValues
    

    setDataFromInput(data){
        this.ivalue.High= data;
    }
    
}
