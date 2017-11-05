import { InvoiceItemSumPipe } from './invoice-item-sum.pipe';

describe('InvoiceItemSumPipe', () => {
  it('create an instance', () => {
    const pipe = new InvoiceItemSumPipe();
    expect(pipe).toBeTruthy();
  });
});
