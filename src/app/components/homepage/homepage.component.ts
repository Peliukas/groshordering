import {Component, OnInit} from '@angular/core';
import {ApiConfigService} from '../../services/api-config.service';
import {Http} from '@angular/http';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  categoryList: any[];

  constructor(private http: Http, private apiConfig: ApiConfigService) {
  }

  ngOnInit() {
    this.getCategoryList();
  }

  public getCategoryList() {
    this.http.get(this.apiConfig.config.baseUrl + this.apiConfig.config.apiSegment + 'products/categories?access_token=' + this.apiConfig.config.accessToken)
      .map(res => res.json())
      .subscribe(categoryList => {
        this.categoryList = categoryList;
      });
  }

}
