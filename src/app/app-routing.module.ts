import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './rout/about/about.component';
import { HomeComponent } from './rout/home/home.component';
import { ListbrandComponent } from './rout/listbrand/listbrand.component';

const routes: Routes = [
  {path:'\home', component:HomeComponent},
  {path:'\about', component:AboutComponent},
  {path:'\listbrand', component:ListbrandComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
