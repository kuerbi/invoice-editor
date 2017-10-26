import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// This Module's Components
import { InvoiceEditorComponent } from './invoice-editor.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild([{
        path: ':customer_id', component: InvoiceEditorComponent
      }]),
      ReactiveFormsModule
    ],
    declarations: [
        InvoiceEditorComponent,
        SidenavComponent,
        InvoiceComponent,
    ],
    exports: [
        InvoiceEditorComponent,
    ]
})
export class InvoiceEditorModule {

}
