import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import {FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  light:string = "light";
  dark:string = "dark";
  visible:boolean = true;
  invisible:boolean = false;
 
  @Output() newItemEvent = new EventEmitter<any>();
  
  ngOnInit(): void {
  }
  view(value:any){
    this.newItemEvent.emit(value);
    console.log("hello" , value)
    this.visible = !this.visible;
    this.invisible = !this.invisible;

  //   this.visible = !this.visible;
  //   this.invisible = !this.invisible;
  //   document.getElementById("bo")?.classList.remove("d-inline-block")
  }
  loginUserData = {
    email: '',
    password: '',
  };
  eye:boolean = false;
  changeType:boolean = true;
  constructor( private fb: FormBuilder) {}

    profileForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(3)]],
  });
  get email() {
    return this.profileForm.get('email');
  }
  get password() {
    return this.profileForm.get('password');
  }
  viewPass(){
    this.eye = !this.eye;
    this.changeType = !this.changeType
  }


}
