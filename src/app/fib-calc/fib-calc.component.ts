import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'fib-calc',
  templateUrl: './fib-calc.component.html'
 })

export class FibCalc implements OnInit {

 public High: number
 public Low: number

 public Range: number
 public type: String
 public result_236: number;
 public result_382: number;
 public result_50: number;
 public result_618: number;


cal_fib(){

  if ( this.type === 'Long'){
    this.Range = this.High - this.Low
    this.result_236 = (this.Range * 0.764) + this.Low
    this.result_382 =(this.Range * 0.618)+this.Low
    this.result_50 =(this.Range * 0.50)+this.Low
    this.result_618 =(this.Range * 0.382)+this.Low
  }
  if (this.type === 'Short'){
    this.Range = this.High - this.Low
    this.result_236 = this.High - (this.Range * 0.764)
    this.result_382 = this.High - (this.Range * 0.618)
    this.result_50 = this.High - (this.Range * 0.50)
    this.result_618 = this.High - (this.Range * 0.382)

  }
  };

  constructor() { }

  ngOnInit() {
    
  }

}
