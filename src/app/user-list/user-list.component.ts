import { Component, OnInit } from '@angular/core';

import {CustomerService} from '../customer.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

	users:any = [];
  constructor(private customerService: CustomerService) { }

  ngOnInit() {

  	this.customerService.getUsersList().subscribe((data: any[])=>{
  		this.users = data;
  	});
  }

  deleteUser(uId){
  	console.log(uId);

  	this.customerService.deleteUser(uId).subscribe(d=>{
  		this.ngOnInit();
  		alert("Deleted Succefully!");
  	})
  }
}
