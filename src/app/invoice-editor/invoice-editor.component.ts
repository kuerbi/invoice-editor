import { InvoiceListService } from './invoice-list.service';
import { Component, OnInit } from '@angular/core';
import { Invoice } from './models/invoice';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'invoice-editor',
    templateUrl: 'invoice-editor.component.html',
    styleUrls: ['invoice-editor.component.scss']
})
export class InvoiceEditorComponent {
  currentInvoiceIndex: number;

  constructor(public invoiceListService: InvoiceListService,
              public route: ActivatedRoute) {
    this.invoiceListService.loadInvoices("./assets/raw_invoices.json");

    this.route.params.subscribe(params => {
      this.currentInvoiceIndex = params["id"];
      this.invoiceListService.changeCurrentInvoice(params["id"]);
    });

  }

  newInvoice() {
    this.invoiceListService.invoices.push(new Invoice());
  }

  // TODO
  importInvoice() {
    let eingabe = window.prompt("Gib ein JSON ein um eine Rechnung zu importieren");

    try {
      let json = JSON.parse(eingabe);
      this.invoiceListService.invoices.push(json);
    } catch(e) {
      console.error("Ungültiges JSON");
    }
  }

  exportInvoice() {
    console.log("Exported Invoice", this.invoiceListService.currentInvoice.getValue());
  }
}
