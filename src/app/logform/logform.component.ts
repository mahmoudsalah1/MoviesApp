import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-logform',
  templateUrl: './logform.component.html',
  styleUrls: ['./logform.component.css']
})
export class LogformComponent implements OnInit {


  loginform:FormGroup
  constructor(private fb:FormBuilder,private router:Router){
      this.loginform = this.fb.group({
        name:['',[Validators.required,Validators.minLength(8)]],
        email:['',[Validators.required,Validators.pattern(/\S+@\S+\.\S+/)]],
        username:['',[Validators.required,Validators.pattern(/^\S*$/)]],
        password:['',[Validators.required,Validators.minLength(8)]],
        verfiyPassword:['',[Validators.required,Validators.minLength(8)]],
      })
  }
  

  get myControls() {
    
    return this.loginform.controls
  }
  submitmydata(){
    console.log(this.loginform);
    this.router.navigate([''])
  }




  ngOnInit(): void {
  }

}
