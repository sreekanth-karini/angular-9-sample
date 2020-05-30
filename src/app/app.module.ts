import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';

import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {BackendService} from './backend.service';

import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';

import {AppRoutingModule} from './app-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CartDetailsComponent,
    CustomerListComponent,
    CustomerDetailsComponent,
    UserListComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    //InMemoryWebApiModule.forRoot(BackendService),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
