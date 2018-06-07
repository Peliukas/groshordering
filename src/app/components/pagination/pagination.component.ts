import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  currentPage: number = 1;
  @Input() totalPages: number;
  perPage: number = 5;
  visiblePages: any[];

  constructor() {
  }

  ngOnInit() {
    this.getVisiblePages();
  }

  public getVisiblePages() {
    let previousPages = [];
    let nextPages = [];

    this.visiblePages = previousPages.concat(nextPages);
  }

  public nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage += 1;
    }
    this.getVisiblePages();
  }

  public previousPage() {
    if (this.currentPage > 0) {
      this.currentPage -= 1;
    }
  }


}
