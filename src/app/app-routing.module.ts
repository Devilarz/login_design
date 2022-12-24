import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
;


const routes: Routes = [
  {path : '' , component : HomeComponent},
  {path : 'cart' , component : CartComponent},
  {path : 'aboutus' , component : AboutusComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
