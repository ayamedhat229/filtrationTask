import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NewdataService } from '../newdata.service';
import { Router } from '@angular/router';
import { response } from 'express';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  [x: string]: any;
data:any={};
term:string='';
picture:string="assets/images/Ellipse1.png";
dataToUpdate: any;

  dataService: any;
constructor(private _NewData:NewdataService, private _Router:Router){}
getUserData(){
  this._NewData.getData().subscribe((response)=>{
    console.log(response);
     this.data=response.data
      console.log(this.data);
      
  })
}
addContact(){
this._Router.navigateByUrl('/register')
}
deleteUser(id:number){
{

  this._NewData.deleteUserById(id).subscribe((res:any)=>{    
    console.log(res)
    this.getUserData()
  })
}
}

updateUser(){
  this._Router.navigateByUrl('/update')
}
ngOnInit(): void {
  this.getUserData()
  
}
}

