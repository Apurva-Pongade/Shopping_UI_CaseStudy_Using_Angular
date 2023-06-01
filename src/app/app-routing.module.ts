import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { CartComponent } from './cart/cart.component';
import { ShopPage1Component } from './shop-page1/shop-page1.component';
import { TabComponent } from './tab/tab.component';
import { MatBadgeModule } from '@angular/material/badge';

const routes: Routes = [
  {
    path:'login',component: LoginComponent
  },
  {
    path: '',redirectTo:'login',pathMatch:'full'
  },
  {
    path:'homePage',component: HomePageComponent
  },
  {
    path:'shop-page',component:ShopPageComponent
  },
  {
    path:'cart', component:CartComponent
  },
  {
    path:'shop-page1', component:ShopPage1Component
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
