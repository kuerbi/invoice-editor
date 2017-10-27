import { InvoiceService } from './invoice.service';
import { Component, OnInit } from '@angular/core';
import { Invoice } from './models/invoice';

@Component({
    moduleId: module.id,
    selector: 'invoice-editor',
    templateUrl: 'invoice-editor.component.html',
    styleUrls: ['invoice-editor.component.scss'],
    providers: [ InvoiceService ]
})
export class InvoiceEditorComponent implements OnInit {
  constructor(public invoiceService: InvoiceService) {}

  ngOnInit() {
    this.invoiceService.loadInvoices("./assets/raw_invoices.json");
  }
}
