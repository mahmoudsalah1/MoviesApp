import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor(private myuser:UsersService) { }
  listdata:any;
  ngOnInit() {
    this.myuser.getuser().subscribe(
      (data) => {
      this.listdata = data
      },
      error => {
      console.log('error: ', error);
      },
      () => {
      console.log('complete ', "compelete");
      })
  }

}
