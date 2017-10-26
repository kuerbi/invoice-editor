import { RouterModule } from '@angular/router';
// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { InvoiceEditorComponent } from './invoice-editor.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
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
