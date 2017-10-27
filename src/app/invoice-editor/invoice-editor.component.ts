import { InvoiceService } from './invoice.service';
import { Component, OnInit } from '@angular/core';
import { Invoice } from './models/invoice';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'invoice-editor',
    templateUrl: 'invoice-editor.component.html',
    styleUrls: ['invoice-editor.component.scss'],
    providers: [ InvoiceService ]
})
export class InvoiceEditorComponent {
  currentInvoiceIndex: number;

  constructor(public invoiceService: InvoiceService,
              public route: ActivatedRoute) {
    this.invoiceService.loadInvoices("./assets/raw_invoices.json");

    this.route.params.subscribe(params => {
      this.currentInvoiceIndex = params["id"];
      this.invoiceService.changeCurrentInvoice(params["id"]);
    });

  }

  newInvoice() {
    this.invoiceService.invoices.push(new Invoice());
  }

  importInvoice() {

  }

  exportInvoice() {

  }
}
