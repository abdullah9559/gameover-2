import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JoinComponent } from './components/join/join.component';
import { HomeComponent } from './components/home/home.component';
import { AllComponent } from './components/all/all.component';
import { PlatformsComponent } from './components/platforms/platforms.component';
import { SortByComponent } from './components/sort-by/sort-by.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { LogoutComponent } from './components/logout/logout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlatformsbrComponent } from './components/platformsbr/platformsbr.component';
import { GamedetailsComponent } from './components/gamedetails/gamedetails.component';
import { RouterModule } from '@angular/router';
import{BrowserAnimationsModule}from '@angular/platform-browser/animations';
import { SortbyrdComponent } from './components/sortbyrd/sortbyrd.component';
import { SortbyalComponent } from './components/sortbyal/sortbyal.component';
import { SortbyreComponent } from './components/sortbyre/sortbyre.component';
import { SortbypoComponent } from './components/sortbypo/sortbypo.component';
import { Category1Component } from './components/category1/category1.component';
import { Category2Component } from './components/category2/category2.component';
import { Category3Component } from './components/category3/category3.component';
import { Category4Component } from './components/category4/category4.component';
import { Category5Component } from './components/category5/category5.component';
import { Category6Component } from './components/category6/category6.component';
import { Category7Component } from './components/category7/category7.component';
import { Category8Component } from './components/category8/category8.component';
import { Category9Component } from './components/category9/category9.component';
import { Category10Component } from './components/category10/category10.component';
import { Category11Component } from './components/category11/category11.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    JoinComponent,
    HomeComponent,
    AllComponent,
    PlatformsComponent,
    SortByComponent,
    CategoriesComponent,
    LogoutComponent,
    PlatformsbrComponent,
    GamedetailsComponent,
    SortbyrdComponent,
    SortbyalComponent,
    SortbyreComponent,
    SortbypoComponent,
    Category1Component,
    Category2Component,
    Category3Component,
    Category4Component,
    Category5Component,
    Category6Component,
    Category7Component,
    Category8Component,
    Category9Component,
    Category10Component,
    Category11Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
 FormsModule,    CarouselModule,RouterModule,CarouselModule,BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
