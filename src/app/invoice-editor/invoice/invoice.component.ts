import { InvoiceListService } from './../invoice-list.service';
import { Invoice, InvoiceItem } from './../models/invoice';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';


@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  @Input() invoice: Invoice;

  public invoiceForm: FormGroup;

  constructor(private _fb: FormBuilder, private invoiceListService: InvoiceListService) {
    this.invoiceForm = this._fb.group({
      customer_id: [""],
      customer_name: [""],
      customer_contact_person: [""],
      customer_address: [""],
      customer_zip: [""],
      customer_city: [""],
      iban: [""],
      bic: [""],
      account_owner: [""],
      mandate_reference: [""],
      mandate_city: [""],
      mandate_date: [""],
      mandate_signee: [""],
      invoice_number: [""],
      invoice_period: [""],
      invoice_date: [""],
      invoice_due_date: [""],
      line_items: this._fb.array([ ])
    });

    this.loadInvoice();
    this.updateInvoiceList();
  }

  private loadInvoice() {
    this.invoiceListService.currentInvoice.subscribe((data) => {
      if(data != null) {
        this.invoiceForm.reset();
        this.adjustLineItemsArray(data.line_items);
        this.invoiceForm.patchValue(data);
      }
    });
  }

  private updateInvoiceList() {
    this.invoiceForm.valueChanges.subscribe((data) => {
      this.invoiceListService.invoices[this.invoiceListService.currentInvoiceIndex] = data;
    });
  }

  get line_items(): FormArray { return this.invoiceForm.get('line_items') as FormArray; }

  ngOnInit() {
    this.invoiceListService.changeCurrentInvoice(0);
  }

  private adjustLineItemsArray(items: any[]) {
    const count = items ? items.length : 0;

    while(count > this.line_items.controls.length) {
      this.line_items.push(this.createListItem());
    }

    while(count < this.line_items.controls.length) {
      this.removeItem(0);
    }
  }

  private createListItem(item?: InvoiceItem): FormGroup {
    return this._fb.group({
      name: item ? item.name:'',
      description: item ? item.description:'',
      quantity: item ? item.quantity:'',
      price_cents: item ? item.price_cents:''
    });
  }

  addItem(item?: InvoiceItem): void {
    this.line_items.push(this.createListItem(item));

    this.invoiceListService.currentInvoice.value.line_items = this.line_items.value;
  }

  removeItem(item: number) {
   (<FormArray>this.invoiceForm.get('line_items')).removeAt(item);
  }

}
