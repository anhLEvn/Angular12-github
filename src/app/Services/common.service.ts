import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private counter = 0;

  constructor() { }

  public power(a: number): number {
    return a * a;
  }

  public getCounter(): number {
    return this.counter;
  }

  public setCounter(a: number){
    this.counter = a;
  }

  public submitData(data: any): void{
    console.log('Send data to server. Data = ', data);


  }
}
