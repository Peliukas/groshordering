import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {MatDialog} from '@angular/material';
import {PurchaseFormComponent} from '../purchase-form/purchase-form.component';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.css']
})
export class NavigationMenuComponent implements OnInit {

  @Output() currentPage: EventEmitter<any> = new EventEmitter();

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  public showPurchaseForm() {
    let dialogRef = this.dialog.open(PurchaseFormComponent);
  }


}
