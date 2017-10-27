import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Invoice } from './models/invoice';


@Injectable()
export class InvoiceService {
  public invoices: Array<Invoice>;
  private currentSelected: number;

  constructor(private _http: Http) {}

  getInvoice(n: number): Invoice {
    if(this.invoices.length < n) return null;

    return this.invoices[n];
  }

  loadInvoices(filename: string): void {
    this._http.get(filename)
      .subscribe((data) => {
        // todo: throw execption when format invalid
        this.invoices = JSON.parse(data['_body']);
    });
  }

  getSumPrice(n: number): number {
    return 0;
  }

  getNettoSumFromInvoice(n: number): number {
    let nettoSum = 0;

    for(let item of this.invoices[n].line_items) {
      console.log(item);
    }

    return nettoSum;
  }
}
