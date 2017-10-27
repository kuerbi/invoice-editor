import { InvoiceEditorModule } from './invoice-editor/invoice-editor.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    InvoiceEditorModule,
    RouterModule.forRoot([
      { path: 'invoice-editor', loadChildren: "./invoice-editor/invoice-editor.module#InvoiceEditorModule" },
      { path: '**', redirectTo: 'invoice-editor', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
