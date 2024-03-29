import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './main/app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { OrgChartModule } from 'ng2-org-chart';
import { OrgChartComponent } from './org-chart/org-chart.component';

/**
 * App main entry point module
 * 
 */

 @NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    OrgChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OrgChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
