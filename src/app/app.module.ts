import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import {SlickModule} from 'ngx-slick';
import {
  MatDatepickerModule, MatMenuModule, MatButtonModule, MatCardModule, MatTabsModule,
  MatTableModule, MatPaginatorModule, MatInputModule, MatSnackBarModule, MatSortModule, MatCheckboxModule,
  MatSelectModule, MatFormFieldModule, MatSidenavModule, MatGridListModule, MatListModule, MatExpansionModule,
  MatTooltipModule, MatSlideToggleModule, MatStepperModule, MatChipsModule, MatNativeDateModule, MatProgressSpinnerModule
} from '@angular/material';
import {ProductListComponent} from './components/product-list/product-list.component';
import {SingleProductComponent} from './components/single-product/single-product.component';
import {ApiConfigService} from './services/api-config.service';
import {NavigationMenuComponent} from './components/navigation-menu/navigation-menu.component';
import {CategoryListComponent} from './components/category-list/category-list.component';
import {HomepageComponent} from './components/homepage/homepage.component';
import {ProductSliderComponent} from './components/product-slider/product-slider.component';
import {StripHtmlPipe} from './pipes/strip-html.pipe';
import {PurchaseFormComponent} from './components/purchase-form/purchase-form.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'products/:id', component: ProductListComponent},
  {path: 'categories', component: CategoryListComponent},
  {path: 'product/:id', component: SingleProductComponent},
];
@NgModule({

  declarations: [
    AppComponent,
    ProductListComponent,
    SingleProductComponent,
    NavigationMenuComponent,
    CategoryListComponent,
    HomepageComponent,
    ProductSliderComponent,
    StripHtmlPipe,
    PurchaseFormComponent
  ],
  imports: [
    HttpModule,
    SlickModule,
    MatDatepickerModule, MatMenuModule, MatButtonModule, MatCardModule, MatTabsModule, MatStepperModule,
    MatTableModule, MatPaginatorModule, MatInputModule, MatSnackBarModule, MatSortModule, MatCheckboxModule,
    MatSelectModule, MatFormFieldModule, MatSidenavModule, MatGridListModule, MatListModule, MatExpansionModule,
    MatTooltipModule, MatSlideToggleModule, MatChipsModule, MatNativeDateModule, MatProgressSpinnerModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  entryComponents: [PurchaseFormComponent],
  providers: [ApiConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
