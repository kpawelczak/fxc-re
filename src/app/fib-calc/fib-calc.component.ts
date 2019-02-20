import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'fib-calc',
  templateUrl: './fib-calc.component.html'
 })

export class FibCalc implements OnInit {

 public High: number
 public Low: number

 public Range: number

 public long_result_236: number;
 public long_result_382: number;
 public long_result_50: number;
 public long_result_618: number;


cal_long(){
    this.Range = this.High - this.Low
    this.long_result_236 = (this.Range * 0.764) + this.Low
    this.long_result_382 =(this.Range * 0.618)+this.Low
    this.long_result_50 =(this.Range * 0.50)+this.Low
    this.long_result_618 =(this.Range * 0.382)+this.Low
};

  constructor() { }

  ngOnInit() {
    
  }

}
