///<reference path="resources/resources.routers.ts"/>
/**
 * Created by Sushma on 10/15/2017.
 */

import {NgModule, Component} from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import {customers} from './customers/customers.routers';
import {signup} from './signup/signup.routers';
import {resources} from './resources/resources.routers';
import {pricing} from './pricing/pricing.routers';
import {features} from './features/features.routers';
import {PageNotFoundComponent} from './page-not-found-component/page-not-found-component.component';

const routes: Routes = [
  {path: 'feature', component: features},
  {path: 'signup', component: signup},
  {path: 'resources', component: resources},
  {path: 'pricing', component: pricing}

];

@NgModule({
  imports: [RouterModule.forRoot([routes
  ])],
  exports: [RouterModule]
})

export class AppRoutingModule{

}
