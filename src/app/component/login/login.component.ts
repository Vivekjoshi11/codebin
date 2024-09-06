import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  

  email= new FormControl("",[
    Validators.required,
    Validators.email 
  ])

  password = new FormControl("",
    [Validators.required,
      Validators.minLength(6)
    ]
  )

  loginForm = new FormGroup([
     this.email,
     this.password
  ])
  login(){
    console.log(this.loginForm.value)
  }
  reset() {
    // throw new Error('Method not implemented.');
    this.loginForm.reset()
    }
}
