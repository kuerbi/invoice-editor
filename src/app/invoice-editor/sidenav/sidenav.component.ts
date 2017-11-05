import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Invoice } from '../models/invoice';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements AfterViewInit {
  @Input() invoices: Array<Invoice>;

  constructor() { }

  ngAfterViewInit() {
  }

}
