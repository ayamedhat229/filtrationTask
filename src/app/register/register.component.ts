import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { register } from 'module';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  constructor(private _AuthService:AuthService, private _Router:Router){}
  ngOnInit(): void {
    
  }

  urlLink: string = "";
  selectFiles(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.urlLink = event.target.result;
      };
    } else {
      console.error('No file selected.');
    }
  }
  registerForm:FormGroup=new FormGroup({
    "firstName":new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(15)]),
    "lastName":new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(15)]),
    "email":new FormControl('',[Validators.required,Validators.email]),
    "phoneNumber":new FormControl('',[Validators.required]),
    "picture":new FormControl('',Validators.required)
  })
  submitForm(){
    if(this.registerForm.invalid){
      return;
    }
 this._AuthService.register(this.registerForm.value).subscribe((data)=>{
  this._Router.navigateByUrl('/home')
  console.log(data)
   
 })
 console.log(this.registerForm.value)
    }
  
}
  

