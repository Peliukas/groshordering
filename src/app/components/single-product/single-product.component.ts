import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Http} from '@angular/http';
import {ApiConfigService} from '../../services/api-config.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})

export class SingleProductComponent implements OnInit {

  private sub: any;
  public productID: any = '';
  public productData: any;
  public relatedProductData: any;

  constructor(private route: ActivatedRoute, private http: Http, private apiConfig: ApiConfigService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.productID = +params['id']; // (+) converts string 'id' to a number
      this.getProductInfo();
    });
  }

  public getProductInfo() {
    this.http.get(this.apiConfig.config.baseUrl + this.apiConfig.config.apiSegment + 'products/' + this.productID + '?access_token=' + this.apiConfig.config.accessToken)
      .map(res => res.json())
      .subscribe(productData => {
        this.productData = productData;
        this.getRelatedItems();
      });
  }

  public getRelatedItems() {
    this.relatedProductData = [];
    for (let product of this.productData.related_ids) {
      this.http.get(this.apiConfig.config.baseUrl + this.apiConfig.config.apiSegment + 'products/' + product + '?access_token=' + this.apiConfig.config.accessToken)
        .map(res => res.json())
        .subscribe(productData => {
          this.relatedProductData.push(productData);
        });
    }
  }
}
