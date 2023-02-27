import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PricingComponent } from './pricing/pricing.component';
import { CryptoComponent } from './crypto/crypto.component';
import { ChartComponent } from './chart/chart.component';
import { StockComponent } from './stock/stock.component';
import { ComoditiesComponent } from './comodities/comodities.component';
import { IndicesComponent } from './indices/indices.component';
import { ForexComponent } from './forex/forex.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule} from "@angular/common/http";
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { GraphComponent } from './graph/graph.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PricingComponent,
    CryptoComponent,
    ChartComponent,
    StockComponent,
    ComoditiesComponent,
    IndicesComponent,
    ForexComponent,
    FooterComponent,
    GraphComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
