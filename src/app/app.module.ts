import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CollectionComponent } from './components/collection/collection.component';
import { AndroidComponent } from './components/android/android.component';
import { AppleComponent } from './components/apple/apple.component';
import { HowToUseComponent } from './components/how-to-use/how-to-use.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { WhatIsAChipsComponent } from './components/what-is-achips/what-is-achips.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ProductCardsComponent } from './components/product-cards/product-cards.component';
import { ProductsComponent } from './components/products/products.component';
import { Products } from './models/Products';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { OffcanvasCartComponent } from './components/offcanvas-cart/offcanvas-cart.component';
import { TotalComponent } from './total/total.component';
import { FormOrderComponent } from './form-order/form-order.component';
import { ShippingPolicyComponent } from './components/shipping-policy/shipping-policy.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'collection', component: CollectionComponent },
  { path: 'android', component: AndroidComponent },
  { path: 'apple', component: AppleComponent },
  { path: 'what-is-a-chip', component: WhatIsAChipsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'shipping-policy', component: ShippingPolicyComponent },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'products/:title',
    component: ProductDetailsComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CollectionComponent,
    AndroidComponent,
    AppleComponent,
    HowToUseComponent,
    WhatIsAChipsComponent,
    AboutUsComponent,
    ProductCardsComponent,
    ProductsComponent,
    ProductDetailsComponent,
    CartComponent,
    OffcanvasCartComponent,
    TotalComponent,
    FormOrderComponent,
    ShippingPolicyComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
