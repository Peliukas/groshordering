import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import {SlickModule} from 'ngx-slick';
import {
  MatDatepickerModule, MatMenuModule, MatButtonModule, MatCardModule, MatTabsModule,
  MatTableModule, MatPaginatorModule, MatInputModule, MatSnackBarModule, MatSortModule, MatCheckboxModule,
  MatSelectModule, MatFormFieldModule, MatSidenavModule, MatGridListModule, MatListModule, MatExpansionModule,
  MatTooltipModule, MatSlideToggleModule, MatStepperModule, MatChipsModule, MatNativeDateModule, MatProgressSpinnerModule
} from '@angular/material';
import {ProductListComponent} from './components/product-page/product-list.component';
import {SingleProductComponent} from './components/single-product/single-product.component';
import {ApiConfigService} from './services/api-config.service';
import {PaginationComponent} from './components/pagination/pagination.component';
import {NavigationMenuComponent} from './components/navigation-menu/navigation-menu.component';
import {CategoryListComponent} from './components/category-list/category-list.component';
import {HomepageComponent} from './components/homepage/homepage.component';
import {ProductSliderComponent} from './components/product-slider/product-slider.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'products/:id', component: ProductListComponent},
  {path: 'categories', component: CategoryListComponent},
  {path: 'product/:id', component: SingleProductComponent}
];
@NgModule({

  declarations: [
    AppComponent,
    ProductListComponent,
    SingleProductComponent,
    PaginationComponent,
    NavigationMenuComponent,
    CategoryListComponent,
    HomepageComponent,
    ProductSliderComponent
  ],
  imports: [
    HttpModule,
    SlickModule,
    MatDatepickerModule, MatMenuModule, MatButtonModule, MatCardModule, MatTabsModule, MatStepperModule,
    MatTableModule, MatPaginatorModule, MatInputModule, MatSnackBarModule, MatSortModule, MatCheckboxModule,
    MatSelectModule, MatFormFieldModule, MatSidenavModule, MatGridListModule, MatListModule, MatExpansionModule,
    MatTooltipModule, MatSlideToggleModule, MatChipsModule, MatNativeDateModule, MatProgressSpinnerModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ApiConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
