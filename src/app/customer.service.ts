import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

	API_URL:string = "api/";
	USER_API:string = "http://localhost:3000/";
  constructor(private http: HttpClient) { }

  getCustomers(){
  	return this.http.get(this.API_URL + 'customers');
  }

  getCustomer(cId){
  	return this.http.get(`${this.API_URL + 'customers'}/${cId}`);
  }

  getJsonFileData(){
  	return this.http.get('assets/data.json');
  }

  getUsersList(){
  	return this.http.get(`${this.USER_API + 'users'}`);
  }

  getUser(uId){
  	return this.http.get(`${this.USER_API + 'users'}/${uId}`);
  }

  deleteUser(uId){
  	return this.http.delete(`${this.USER_API + 'users'}/${uId}`);
  }
}
