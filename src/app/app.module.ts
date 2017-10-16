import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FeaturesComponent } from './features/features.component';
import { PricingComponent } from './pricing/pricing.component';
import { CustomersComponent } from './customers/customers.component';
import { ResourcesComponent } from './resources/resources.component';
import { SignupComponent } from './signup/signup.component';
import {AppRoutingModule} from "./app-routing.module";
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent} from './page-not-found-component/page-not-found-component.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    FeaturesComponent,
    PricingComponent,
    CustomersComponent,
    ResourcesComponent,
    SignupComponent,
    HeaderComponent,
    PageNotFoundComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
