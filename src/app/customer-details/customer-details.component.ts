import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CustomerService} from '../customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

	customer:any = {};

  constructor(
  	private route: ActivatedRoute,
  	private customerService: CustomerService) { }

  ngOnInit() {

  		this.route.paramMap.subscribe(params=>{
  			this.customerService.getCustomer(params.get('id')).subscribe(data=>{
  				this.customer = data;
  			})	
  		})
  }

}
