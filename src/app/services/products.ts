import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Products {

  constructor(private http:HttpClient){}

  // getproductlist(){
  //   const url="http://dummy-json.mock.beeceptor.com/todos";
  //   return this.http.get(url)
  // }
}
