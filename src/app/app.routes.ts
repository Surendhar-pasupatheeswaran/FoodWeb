import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { FoodComponent } from './component/food/food.component';
import { CartComponent } from './component/cart/cart.component';
import { ProfileComponent } from './component/profile/profile.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent} ,
    {path:'food',component:FoodComponent},
    {path:'cart',component:CartComponent},
    {
        path:'profile',component:ProfileComponent
    } 
    
];  
