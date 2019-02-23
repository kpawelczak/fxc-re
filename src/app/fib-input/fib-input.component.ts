import { Component, EventEmitter } from '@angular/core';

@Component({
    selector: 'fib-input',
    templateUrl: './fib-input.component.html',
    styleUrls: ['./fib-input.component.css'],
   
 inputs: ['High'],

})
export class FibInputComponent {

    public High: number;
    public showElement = true;
    
}
