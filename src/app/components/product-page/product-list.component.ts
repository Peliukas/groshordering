import {Component, OnInit, Injectable, ViewChild, ElementRef, Input} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {ApiConfigService} from '../../services/api-config.service';
import {ActivatedRoute} from '@angular/router';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

@Injectable()
export class ProductListComponent implements OnInit {

  filteredProducts: any[];
  productList: any = [];
  currentPage: number = 1;
  perPage: number = 10;
  totalProductNumber: number = 0;
  categoryId: number;
  searchFieldFormControl: FormControl = new FormControl('');
  @ViewChild('paginator') paginator: ElementRef;

  constructor(private http: Http, private apiConfig: ApiConfigService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    let sub = this.route.params.subscribe(params => {
      this.categoryId = +params['id']; // (+) converts string 'id' to a number
      this.getProducts();
    });
  }

  public getProducts() {
    let tempUrl = this.apiConfig.config.baseUrl +
      this.apiConfig.config.apiSegment + 'products' +
      '?per_page=' + this.perPage +
      '&offset=' + this.currentPage +
      '&access_token=' + this.apiConfig.config.accessToken;
    tempUrl += this.categoryId ? '&category=' + this.categoryId : '';
    tempUrl += this.searchFieldFormControl.value ? '&search=' + this.searchFieldFormControl.value : '';
    this.http.get(tempUrl).subscribe(response => {
      this.totalProductNumber = parseInt(response.headers.get('X-WP-Total'));
    });

    this.http.get(tempUrl)
      .map(res => res.json())
      .subscribe(productList => {
        this.productList = productList;
      });
  }


  public nextPage(event: any) {
    this.currentPage = event.pageIndex;
    this.perPage = event.pageSize;
    this.getProducts();
  }


}
