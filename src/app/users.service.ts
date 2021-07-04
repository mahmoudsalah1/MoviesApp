import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private htt:HttpClient) { }

  getuser(){
     return this.htt.get("https://fakestoreapi.com/users")
  }

}
