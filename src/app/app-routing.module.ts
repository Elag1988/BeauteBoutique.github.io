import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProductsComponent } from './pages/products/products.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
{
  path:"",component:LoginComponent
},
{
  path:"home",component:HomeComponent
},
{
  path:"products",component:ProductsComponent
},
{
  path:"about",component:AboutComponent
},
{
  path:"contact",component:ContactComponent
},
{
  path:"profile",component:ProfileComponent
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
