import {Injectable} from '@angular/core';
import {LoggerService} from './logger.service';


@Injectable({
  providedIn: 'root'
})
export class CalculatorService {


  constructor(private logger: LoggerService) {

  }

  // add(n1: number, n2:number) {
  //   this.logger.log("Addition operation called");
  //   let result = this.sumOfTwoNumbers(n1, n2);
  //   return result;
  // }

  sumOfTwoNumbers(numberOne: number, numberTwo: number): number {
    let totalSum = numberOne + numberTwo;
    return totalSum;
  }
 
  addMultiple(number: []): number {
    return 0;
  }

  subtract(n1: number, n2:number) {
    this.logger.log("Subtraction operation called");
    return n1 - n2;
  }


}

