import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{Routes,RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { SplashComponent } from './splash/splash.component';
import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes=[
  {path:'footer',component:FooterComponent},
  {
    path:'login', component:LoginComponent
},
{path:'', component:SplashComponent , pathMatch:'full'},
{path:'splash', component:SplashComponent},
{path:'signup', component:SignupComponent}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
