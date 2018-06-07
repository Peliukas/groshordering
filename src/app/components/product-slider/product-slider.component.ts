import {Component, Input, OnInit} from '@angular/core';
import {ApiConfigService} from '../../services/api-config.service';
import {Http} from '@angular/http';

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.css']
})
export class ProductSliderComponent implements OnInit {

  @Input() categoryId: number;
  @Input() categoryName: string;
  categoryProducts: any[];
  slideConfig = {
    'slidesToShow': 4,
    'slidesToScroll': 2,
    'arrows': true,
    'responsive': [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  constructor(private http: Http, private apiConfig: ApiConfigService) {
  }

  ngOnInit() {
    this.getCategoryItems();
  }

  public getCategoryItems() {
    this.http.get(this.apiConfig.config.baseUrl + this.apiConfig.config.apiSegment + 'products?access_token=' + this.apiConfig.config.accessToken + '&category=' + this.categoryId)
      .map(res => res.json())
      .subscribe(categoryProducts => {
        this.categoryProducts = categoryProducts;
      });
  }


}
