export class InvoiceItem {
  name: string;
  description: string;
  quantity: number;
  price_cents: number;
};

export class Invoice {
  constructor(
    public customer_id: number = -1,
    public customer_name: string = '',
    public customer_contact_person: string = '',
    public customer_address: string = '',
    public customer_zip: string = '',
    public customer_city: string = '',
    public iban: string = '',
    public bic: string = '',
    public account_owner: string = '',
    public mandate_reference: string = '',
    public mandate_city: string = '',
    public mandate_date: string = '',
    public mandate_signee: string = '',
    public invoice_number: string = '',
    public invoice_period: string = '',
    public invoice_date: string = '',
    public invoice_due_date: string = '',
    public line_items: Array<InvoiceItem> = [new InvoiceItem()],
  ) {

  }

  get sum_price() {
    let sum = 0;
    for(let item of this.line_items) {
      sum += item.price_cents;
    }
    return sum;
  }
};
