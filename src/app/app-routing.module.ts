import {NgModule} from '@angular/core';

import {RouterModule, Routes } from '@angular/router';

import {CustomerListComponent} from './customer-list/customer-list.component';
import {CustomerDetailsComponent} from './customer-details/customer-details.component';
import {CartDetailsComponent} from './cart-details/cart-details.component';
import {UserListComponent} from './user-list/user-list.component';
import {UserDetailsComponent} from './user-details/user-details.component';


const routes:Routes = [
{path:'', pathMatch: 'full', component: CustomerListComponent},
{path: 'customers', component: CustomerListComponent},
{path: 'customer/:id', component: CustomerDetailsComponent},
{path: 'cartapp', component: CartDetailsComponent},
{path: 'users', component: UserListComponent},
{path: 'user/:id', component: UserDetailsComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule {

}