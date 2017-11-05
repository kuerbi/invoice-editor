import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Invoice } from './models/invoice';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class InvoiceListService {
  public invoices: Array<Invoice>;
  public currentInvoiceIndex;
  public currentInvoice: BehaviorSubject<Invoice> = new BehaviorSubject<Invoice>(new Invoice());

  constructor(private _http: Http) {}

  changeCurrentInvoice(n: number) {
    this.currentInvoiceIndex = n;
    this.currentInvoice.next(this.getInvoice(n));
  }

  getInvoice(n: number): Invoice {
    if(!this.invoices) return null;
    if(this.invoices.length < n) return null;

    return this.invoices[n];
  }

  loadInvoices(filename: string): Subscription {
    return this._http.get(filename)
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
