import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './login.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  color:ThemePalette = 'primary'; //check box color
  signUpForm = new FormGroup({});
  signUpModel: any = {};
  signUpOptions: FormlyFormOptions = {};
  logInForm = new FormGroup({});
  logInModel: any = {};
  logInOptions: FormlyFormOptions = {};

  constructor() { }
 

  signUpFields: FormlyFieldConfig[] = [
    {
      key: 'Input',
      type: 'input',
      templateOptions: {
        label: 'FirstName',
        placeholder: 'Placeholder',
        description: '',
        required: true,
      },
    },
    {
      key: 'Input',
      type: 'input',
      templateOptions: {
        label: 'Last Name',
        placeholder: 'Placeholder',
        description: '',
        required: true,
      },
    },
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        type: 'email',
        label: 'email Address',
        placeholder: 'Placeholder',
        description: '',
        required: true,
      },
    },
    {
      key: 'password',
      type: 'input',
      templateOptions: {
        type: 'password',
        label: 'Password',
        placeholder: 'Must be at least 3 characters',
        required: true,
        minLength: 3,
      },
    },
    {
      key: 'passwordConfirm',
      type: 'input',
      templateOptions: {
        type: 'password',
        label: 'Confirm Password',
        placeholder: 'Please re-enter your password',
        required: true,
      },
    },
    {
      key: 'Checkbox',
      type: 'checkbox',
      templateOptions: {
        label: 'I read  terms and conditions',
        description: '',
        pattern: 'false',
        required: true,
      },
    },
  ];

  logInFields: FormlyFieldConfig[] = [
    {
      key: 'Input',
      type: 'input',
      templateOptions: {
        label: 'UserName/Email',
        placeholder: 'Placeholder',
        description: '',
        required: true,
      },
    },
    {
      key: 'password',
      type: 'input',
      templateOptions: {
        label: 'Password',
        type: 'password',
        required: true,
        minLength: 6,
      },
    },
    {
      key: 'Checkbox',
      type: 'checkbox',
      templateOptions: {
        label: 'Stay signed in',
        description: '',
        pattern: 'false',
        required: false,
      },
    },
    
  ];
  ngOnInit(): void {

  }
  register(){
      
  }
  logIn(){
    
  }

  

}
