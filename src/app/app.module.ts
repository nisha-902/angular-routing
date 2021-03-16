import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoutComponent } from './rout/rout.component';
import { HomeComponent } from './rout/home/home.component';
import { AboutComponent } from './rout/about/about.component';
import { ListbrandComponent } from './rout/listbrand/listbrand.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutComponent,
    HomeComponent,
    AboutComponent,
    ListbrandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
