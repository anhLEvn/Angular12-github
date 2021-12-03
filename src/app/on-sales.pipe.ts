import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onSales'
})
export class OnSalesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): string {
    // console.log("my pipe", value);
    if(value){
      return "on sales";
    }

    return 'not on sales';
  }

}
