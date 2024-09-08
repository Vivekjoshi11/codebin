import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }

  registerUser(email:string, password:string){const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
        this.router.navigate(['/'])
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        alert("something went wrong while signup try again")
        
        // ..
      });
    

  }
  loginUser(email:string, password:string){

    const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log({user})
    this.router.navigate(['/'])
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        alert("something went wrong while signup try again")
        
  });
  }
}
