import { Component } from '@angular/core';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
   
    public show: boolean = true;

    setShowFromCalc() {
        this.show = !this.show;
    }

    public High
    public Low
    public type

    setHighFromInput(DataHigh) {
        this.High = DataHigh;
    }

    setLowFromInput(DataLow) {
        this.Low = DataLow;
    }

    setTypeFromInput(DataType) {
        this.type = DataType;
    }

    public result_236
    public result_382
    public result_50
    public result_618

    set236FromCalc(Data2) {
        this.result_236 = Data2
    }

    set382FromCalc(Data3) {
        this.result_382 = Data3
    }

    set50FromCalc(Data5) {
        this.result_50 = Data5
    }

    set618FromCalc(Data6) {
        this.result_618 = Data6
    }

}
