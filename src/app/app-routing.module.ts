/**
 * Created by Sushma on 10/15/2017.
 */

import {NgModule, Component} from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import {CustomersComponent} from './customers/customers.component';
import {SignupComponent} from './signup/signup.component';
import {ResourcesComponent} from './resources/resources.component';
import {PricingComponent} from './pricing/pricing.component';
import {FeaturesComponent} from './features/features.component';
import {LoginComponent} from './login/login.component';
import { AdvertisementoptionComponent } from './advertisementoption/advertisementoption.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/customers', pathMatch: 'full' },
  {path: 'customers', component: CustomersComponent},
  {path: 'resources', component: ResourcesComponent},
  {path: 'pricing', component: PricingComponent},
  {path: 'features', component: FeaturesComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path:'Advertise', component:AdvertisementoptionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule{

}
