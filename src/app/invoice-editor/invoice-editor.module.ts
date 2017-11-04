import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// This Module's Components
import { InvoiceEditorComponent } from './invoice-editor.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { InvoiceService } from './invoice.service';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: ':id', component: InvoiceEditorComponent
    }]),
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [
      InvoiceEditorComponent,
      SidenavComponent,
      InvoiceComponent,
  ],
  exports: [
      InvoiceEditorComponent,
  ],
  providers: [
    InvoiceService
  ]
})
export class InvoiceEditorModule {

}
