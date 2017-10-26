import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';


@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  public invoiceForm: FormGroup;
  public lineItems: FormArray;

  constructor(private _fb: FormBuilder) {
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
  }

  ngOnInit() {
  }

  createListItem(): FormGroup {
    return this._fb.group({
      name: '',
      description: '',
      quantity: '',
      price_cents: 0
    });
  }

  addItem(): void {
    this.lineItems = this.invoiceForm.get('line_items') as FormArray;
    this.lineItems.push(this.createListItem());
  }

}
