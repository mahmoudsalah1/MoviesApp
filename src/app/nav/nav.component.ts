import { Component, OnInit } from '@angular/core';
import { ShareddataService } from '../shareddata.service';
// import {Router} from '@angular/router'  //for button
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  moviename : string=""
  constructor(private data :ShareddataService) {
    this.data.projectname.subscribe(data=>{
      this.moviename = data
    })
    
   }           // private rout : Router    //for button

  ngOnInit(): void {
  }
   //using button to redirect by routting 
  // redirtocustomer(){
  //   this.rout.navigate(['/customers'])
  // }
  
// ratting stars

}
