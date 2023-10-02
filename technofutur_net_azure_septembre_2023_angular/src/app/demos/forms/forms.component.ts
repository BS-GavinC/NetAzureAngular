import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {

  passwordRegex : RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

  myControl! : FormControl

  myGroup : FormGroup  = this._formbuilder.group({
    pseudo : ["Bonjour", [Validators.required]],
    email : [null, [Validators.required, Validators.email]],
    password : [null, [Validators.required, Validators.pattern(this.passwordRegex)]],
    array : this._formbuilder.array([])
  })

  constructor(private _formbuilder : FormBuilder) {

    this.myControl = this._formbuilder.control(null, [Validators.required])


    }

  getArray() : FormArray{
    return this.myGroup.get("array") as FormArray
  }

  submit(){

    if(this.myGroup.valid){
      let myUser : user = {
        email : this.myGroup.value.email,
        pseudo : this.myGroup.value.pseudo,
        password : this.myGroup.value.password,
        listElem : this.myGroup.value.array
      }

      console.log(myUser);
    }
    else{
      console.log("Formulaire invalide");

    }



  }

  addToArray(){
    this.getArray().push(this._formbuilder.control(null, Validators.required))
  }

  removeToArray(index: number){
    this.getArray().removeAt(index)
  }

}

export interface user {
  pseudo : string
  email : string
  password : string
  listElem : string[]
}
