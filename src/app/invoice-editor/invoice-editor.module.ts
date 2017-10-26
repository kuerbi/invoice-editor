// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { InvoiceEditorComponent } from './invoice-editor.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { InvoiceComponent } from './invoice/invoice.component';

@NgModule({
    imports: [

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
