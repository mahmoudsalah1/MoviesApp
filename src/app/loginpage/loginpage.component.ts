import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  myname: string = ""
  mypassword: string = ""

  submitform: FormGroup
  constructor(private fb:FormBuilder,private rout : Router) {  
    this.submitform = this.fb.group({
      nameValue:["",[Validators.required,Validators.minLength(5)]],
      emailValue: ["", [Validators.required, Validators.pattern(/\S+@\S+\.\S+/)]],
      usernameValue:["",[Validators.required,Validators.pattern(/^\S*$/)]],
      PasswordValue: ["", [Validators.required,Validators.minLength(8)]]
    })
  }

  get logincontrols(){
    //console.log(this.submitform.controls);
    return this.submitform.controls;
  }

  ngOnInit(): void {
    
  }
  submitmyForm(loginPage: NgForm) {
    //console.log(loginPage.controls);
    this.rout.navigate([''])
  }

  submitloginform() {
    console.log(this.submitform);
    //this.rout.navigate([''])
  }
}
