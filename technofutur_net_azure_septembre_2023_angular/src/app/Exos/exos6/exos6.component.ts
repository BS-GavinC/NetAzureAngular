import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-exos6',
  templateUrl: './exos6.component.html',
  styleUrls: ['./exos6.component.scss']
})
export class Exos6Component {

  myFormGroup : FormGroup = this._formBuilder.group({
    email : [null, [Validators.required, Validators.email]],
    password : [null, [Validators.required]],
    passwordConfirmation : [null, [Validators.required]],
    birthdate : [null, [Validators.required]]
  })

 /**
  *
  */
 constructor(private _formBuilder : FormBuilder) {


 }

 public get comparePassword() : boolean{
  return this.myFormGroup.value.password === this.myFormGroup.value.passwordConfirmation;
 }

 public get checkDate() : boolean{
  if(this.myFormGroup.value.birthdate != null){
    let date : Date = new Date(this.myFormGroup.value.birthdate)
    return date.getFullYear() > 1900
  }
  return false;
 }

 public get validator() : boolean{
  return this.comparePassword && this.checkDate && this.myFormGroup.valid
 }


 submit(){

  if(this.validator){
    console.log("valide");

  }
  else{
    console.log("invalide");

  }
 }
}
