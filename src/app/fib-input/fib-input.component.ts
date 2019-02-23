import { Component } from '@angular/core';
import { InputValues } from '../input-values';


@Component({
    selector: 'fib-input',
    templateUrl: './fib-input.component.html',
    styleUrls: ['./fib-input.component.css'],

})
export class FibInputComponent {

    ivalue = InputValues

    public showElement = true;
    
}
