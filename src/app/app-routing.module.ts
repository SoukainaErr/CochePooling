import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { HomePageComponent } from './home/home-page/home-page.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { CreateOfferComponent } from './offers/create-offer/create-offer.component';
import { OfferDetailComponent } from './offers/offer-detail/offer-detail.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { MyOffersComponent } from './profile/my-offers/my-offers.component';
import { LayoutComponent } from './shared/layout/layout.component';

const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
    redirectTo:"/app/home"

  },
  {
    path:"app",
    component:LayoutComponent,
    children:[
      {
        path:"home",
        component:HomePageComponent,
      },
      {
        path:"edit-profile",
        component:EditProfileComponent,
        canActivate:[AuthGuardGuard]
      },
      {
        path:"my-offers",
        component:MyOffersComponent,
        canActivate:[AuthGuardGuard]
      },
      {
        path:"offer-detail/:id",
        component:OfferDetailComponent,
        canActivate:[AuthGuardGuard]
      },
      {
        path:"create-offer",
        component:CreateOfferComponent,
        canActivate:[AuthGuardGuard]
      },
    ]
  },
  {
    path:"signin",
    component:SignInComponent
  },
  {
    path:"signup",
    component:SignUpComponent
  },
  {
    path:"**",
    component:NoPageFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
