import { Component, OnInit } from '@angular/core';


import {ActivatedRoute} from '@angular/router';
import {CustomerService} from '../customer.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

	user:any = {};

  constructor(private route: ActivatedRoute,
  	private customerService: CustomerService) { }

  ngOnInit(): void {

  	this.route.paramMap.subscribe(params=>{
  			this.customerService.getUser(params.get('id')).subscribe(data=>{
  				this.user = data;
  			})	
  		})
  }

}
