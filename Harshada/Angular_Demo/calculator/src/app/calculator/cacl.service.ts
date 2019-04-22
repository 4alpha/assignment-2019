import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CaclService {
  sum;
  constructor() {}

  add(one: number, two: number): number {
    this.sum = +one + +two;
    return this.sum;
  }

  sub(one: number, two: number): number {
    this.sum = +one - +two;
    return this.sum;
  }

  mult(one: number, two: number): number {
    this.sum = +one * +two;
    return this.sum;
  }

  div(one: number, two: number): number {
    if (two == 0) {
      throw new Error('divided by 0');
    }
    this.sum = +one / +two;
    return this.sum;
  }
}
