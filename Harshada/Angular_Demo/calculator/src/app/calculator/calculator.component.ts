import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  title="Welcome to calculator!";
  sum: number = 0;
  constructor() { }

  add(one: number, two: number) {
    console.log("in add function");
    this.sum = +one + +two ;
  }

  sub(one: number, two: number) {
    this.sum = +one - +two ;
  }
  
  mult(one: number, two: number) {
    this.sum = +one * +two ;
  }

  div(one: number, two: number) {
    this.sum = +one / +two ;
  }

  ngOnInit() {
  }

}
