import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { MyOffersComponent } from './profile/my-offers/my-offers.component';
import { OfferDetailComponent } from './offers/offer-detail/offer-detail.component';
import { CreateOfferComponent } from './offers/create-offer/create-offer.component';
import { AngularFireModule }  from  '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { SharedModule } from './shared/shared.module';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { FormsModule } from '@angular/forms';
import { UserAvatarPipe } from './pipes/user-avatar.pipe';
import { FilterOffersPipe } from './pipes/filter-offers.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    HomePageComponent,
    EditProfileComponent,
    MyOffersComponent,
    OfferDetailComponent,
    CreateOfferComponent,
    NoPageFoundComponent,
    UserAvatarPipe,
    FilterOffersPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    SharedModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
