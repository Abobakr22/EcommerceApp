import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule , CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  userRegisterForm:FormGroup

  constructor() {
    this.userRegisterForm = new FormGroup({
      name: new FormControl('' , [Validators.required , Validators.pattern('^[a-z-A-Z]{3,10}$')]),
      email: new FormControl(''),
      password: new FormControl(''),
      address: new FormGroup({
        city: new FormControl(''),
        street: new FormControl('')
      }),
      phoneNumbers: new FormArray([new FormControl('')]),
    })
  }

  Register(){
    // alert('done')
  }

  //readonly method to get key name and be used like that => name.
  get name(){
    return this.userRegisterForm.get('name')
  }

 //readonly method to get key phoneNumbers as array to push new elements in it
  get phones(){
    return this.userRegisterForm.get('phoneNumbers') as FormArray
  }

  addNewPhoneNumber(){
    this.phones.push(new FormControl(''))
  }

}
