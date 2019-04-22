import { Component, OnInit } from '@angular/core';
import { CaclService } from './cacl.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  title="Welcome to calculator!";
  sum: number = 0;
  constructor(private calcService: CaclService) { }

  add(one: number, two: number) {
    this.sum = this.calcService.add(one,two);
  }
  
  sub(one: number, two: number) {
    this.sum = this.calcService.sub(one,two);
  }

  mult(one: number, two: number) {
    this.sum = this.calcService.mult(one,two);
  }

  div(one: number, two: number) {
    this.sum = this.calcService.div(one,two);
  }

  ngOnInit() {
  }

}
