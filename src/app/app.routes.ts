import { Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { AboutComponent } from './component/about/about.component';

export const routes: Routes = [
    {path: 'login', component:LoginComponent},
    {path: 'signup', component:SignupComponent},
    {path: 'about', component:AboutComponent},
    {path:'', redirectTo:"/login",pathMatch:"full"},


    {path:'**', component:NotFoundComponent}  // this will check if above routes are not there than it will be on notfound page 
    // and it should be last on the routers because it chech abouves routes
];
