import { Component, Output, EventEmitter } from '@angular/core';
import { InputValues } from '../input-values';




@Component({
    selector: 'fib-input',
    templateUrl: './fib-input.component.html',
    styleUrls: ['./fib-input.component.css'],

})
export class FibInputComponent {

    public High: string;
    @Output() event: EventEmitter<string> = new EventEmitter();

    onChange(){
this.event.emit(this.High);



    }
    
    

    ivalue = InputValues
   
    public showElement = true;

}
