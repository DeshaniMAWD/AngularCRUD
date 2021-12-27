import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserModel } from './user-dashboard.model';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

    componentName = "user";

    formValue !: FormGroup; 
    userModelObj : UserModel = new UserModel();
    userData !: any;
    showAdd !: boolean;
    showUpdate !: boolean;
  constructor(private formbuilder: FormBuilder, private api : ApiService) { }
   
  




  ngOnInit(): void {
      this.formValue = this.formbuilder.group({
          email : [''],
          firstName : [''],
          lastName : [''],
          mobileNumber :[ ''],
          address : ['']
      })
      this.getAllUsers();
  }

  clickAddUser(){
      this.formValue.reset();
      this.showAdd = true;
      this.showUpdate = false;
  }

 postUserDetails(){
     this.userModelObj.email = this.formValue.value.email;
     this.userModelObj.firstName = this.formValue.value.firstName;
     this.userModelObj.lastName = this.formValue.value.lastName;
     this.userModelObj.mobileNumber = this.formValue.value.mobileNumber;
     this.userModelObj.address = this.formValue.value.address;
    
     
     this.api.postUser(this.userModelObj)
     .subscribe(res=>{
         console.log(res);
         alert("User added Successfully")
         let ref = document.getElementById('cancel')
         ref?.click();
         this.formValue.reset();
         this.getAllUsers();
     },
     err=>{
         alert("Something went wrong!")
     }) 

 }
getAllUsers(){
    this.api.getUser()
    .subscribe(res=>{
        this.userData = res;
    })
}
deleteUser(row : any){
    this.api.deleteUser(row.id) 
    .subscribe(res=>{
        alert("User Deleted! ");
        this.getAllUsers();
    })
}
 onEdit(row:any){
    this.showAdd = false;
    this.showUpdate = true;
    this.userModelObj.id = row.id;
 this.formValue.controls['email'].setValue(row.email);
 this.formValue.controls['firstName'].setValue(row.firstName);
 this.formValue.controls['lastName'].setValue(row.lastName);
 this.formValue.controls['mobileNumber'].setValue(row.mobileNumber);
 this.formValue.controls['address'].setValue(row.address);

 }

 updateUser(){
    this.userModelObj.email = this.formValue.value.email;
    this.userModelObj.firstName = this.formValue.value.firstName;
    this.userModelObj.lastName = this.formValue.value.lastName;
    this.userModelObj.mobileNumber = this.formValue.value.mobileNumber;
    this.userModelObj.address = this.formValue.value.address;

    this.api.updateUser(this.userModelObj,this.userModelObj.id)
    .subscribe(res=>{
        alert("Updated Successfully!");
        let ref = document.getElementById('cancel')
         ref?.click();
         this.formValue.reset();
         this.getAllUsers();
    })
 }

}