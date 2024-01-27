import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FormGroup,FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { NewdataService } from '../newdata.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.scss'
})
export class UpdateComponent implements OnInit {
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
  updateForm= new FormGroup({
    "firstName":new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(15)]),
    "lastName":new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(15)]),
    "email":new FormControl('',[Validators.required,Validators.email]),
    "phoneNumber":new FormControl('',[Validators.required]),
    "picture":new FormControl('',Validators.required)
  })
  constructor(private _NewData:NewdataService, private _router:ActivatedRoute,private _Router:Router){}
ngOnInit(): void {
  console.log(this._router.snapshot.params['id'])
  this._NewData.updateUserDataById(this._router.snapshot.params['id']).subscribe((results:any)=>{
    console.log(results)
    this.updateForm=new FormGroup({
      firstName:new FormControl(results['firstName'],[Validators.required,Validators.minLength(2),Validators.maxLength(15)]),
      lastName:new FormControl(results['lastName'],[Validators.required,Validators.minLength(2),Validators.maxLength(15)]),
      email:new FormControl(results['email'],[Validators.required,Validators.email]),
      phoneNumber:new FormControl(results['phoneNumber'],[Validators.required]),
      picture:new FormControl(results['picture'],Validators.required)
    })
   
  })
 
}
updateDataId(){
  this._NewData.updateUserData(this._router.snapshot.params['id'],this.updateForm.value).subscribe((results)=>{
    console.log(results,"data updated successfully")
    this._Router.navigateByUrl('/home')
  })
 
}

}
