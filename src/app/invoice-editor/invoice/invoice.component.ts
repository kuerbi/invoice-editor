import { InvoiceListService } from './../invoice-list.service';
import { Invoice } from './../models/invoice';
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

    this.invoiceListService.currentInvoice.subscribe((data) => {
      if(data != null) {
       this.invoiceForm.patchValue(data);
      }
    });
  }

  get line_items(): FormArray { return this.invoiceForm.get('line_items') as FormArray; }

  ngOnInit() {
    this.invoiceListService.changeCurrentInvoice(0);
  }

  createListItem(): FormGroup {
    return this._fb.group({
      name: '',
      description: '',
      quantity: '',
      price_cents: 100
    });
  }

  addItem(): void {
    this.line_items.push(this.createListItem());
  }

  removeItem(item: number) {
   (<FormArray>this.invoiceForm.get('line_items')).removeAt(item);
  }

}
