import { Invoice } from './../models/invoice';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'invoiceItemSum'
})
export class InvoiceItemSumPipe implements PipeTransform {

  transform(value: Invoice, args?: any): any {
    let sum = 0;
    for(let line_item of value.line_items) {
      sum += line_item.price_cents
    };

    return sum / 100;
  }

}
