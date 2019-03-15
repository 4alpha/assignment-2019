import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  { path: 'imageFirst', component: FirstComponent  },
 
 { path: 'imageSecond', component: SecondComponent  },

 { path: '', component: HomeComponent},

 { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
  { enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
