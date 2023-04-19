import { SortbyreComponent } from './components/sortbyre/sortbyre.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { JoinComponent } from './components/join/join.component';
import { LoginComponent } from './components/login/login.component';
import { SortByComponent } from './components/sort-by/sort-by.component';
import { AllComponent } from './components/all/all.component';

import { AuthGuard } from './auth.guard';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { PlatformsComponent } from './components/platforms/platforms.component';
import { PlatformsbrComponent } from './components/platformsbr/platformsbr.component';
import { GamedetailsComponent } from './components/gamedetails/gamedetails.component';
import { SortbyalComponent } from './components/sortbyal/sortbyal.component';
import { SortbyrdComponent } from './components/sortbyrd/sortbyrd.component';
import { SortbypoComponent } from './components/sortbypo/sortbypo.component';
import { Category1Component } from './components/category1/category1.component';
import { Category2Component } from './components/category2/category2.component';
import { Category3Component } from './components/category3/category3.component';
import { Category4Component } from './components/category4/category4.component';
import { Category5Component } from './components/category5/category5.component';
import { Category6Component } from './components/category6/category6.component';
import { Category7Component } from './components/category7/category7.component';
import { Category8Component } from './components/category8/category8.component';
import { Category9Component } from './components/category9/category9.component';
import { Category10Component } from './components/category10/category10.component';
import { Category11Component } from './components/category11/category11.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'home',canActivate:[AuthGuard],component:HomeComponent},
{path:"join",component:JoinComponent},
{path:"login",component:LoginComponent},
{path:"platforms",canActivate:[AuthGuard],component:PlatformsComponent},
{path:"sortbyrd",canActivate:[AuthGuard],component:SortbyrdComponent},
{path:"sortbypo",canActivate:[AuthGuard],component:SortbypoComponent},
{path:"sortbyal",canActivate:[AuthGuard],component:SortbyalComponent},
{path:"sortbyre",canActivate:[AuthGuard],component:SortbyreComponent},
{path:"category1",canActivate:[AuthGuard],component:Category1Component},
{path:"category2",canActivate:[AuthGuard],component:Category2Component},
{path:"category3",canActivate:[AuthGuard],component:Category3Component},
{path:"category4",canActivate:[AuthGuard],component:Category4Component},
{path:"category5",canActivate:[AuthGuard],component:Category5Component},
{path:"category6",canActivate:[AuthGuard],component:Category6Component},
{path:"category7",canActivate:[AuthGuard],component:Category7Component},
{path:"category8",canActivate:[AuthGuard],component:Category8Component},
{path:"category9",canActivate:[AuthGuard],component:Category9Component},
{path:"category10",canActivate:[AuthGuard],component:Category10Component},
{path:"category11",canActivate:[AuthGuard],component:Category11Component},
{path:"platformsbr",canActivate:[AuthGuard],component:PlatformsbrComponent}
,{path:'gamedetails/:id',canActivate:[AuthGuard],component:GamedetailsComponent},
{path:"sort-by",canActivate:[AuthGuard],component:SortByComponent},

{path:'all',canActivate:[AuthGuard],component:AllComponent},
{path:'**',component:NotfoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
