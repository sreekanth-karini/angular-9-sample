import { Component, OnInit } from '@angular/core';

import {CustomerService} from '../customer.service';
import * as data from '../../assets/data.json';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent implements OnInit {

	customers:any[] = [];
  products: any = (data as any).default;


  constructor(private customerService: CustomerService,
    private http: HttpClient) { }

  ngOnInit(){

  		this.customerService.getCustomers().subscribe((data: any[])=>{
  			this.customers = data;
  		});
      console.log("from json file>>>>",this.products);
  }

}
