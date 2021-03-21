import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { from, Observable, of } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { COLLECTIONS } from '../models/collections.const';
import { CreateOfferModel } from '../models/create-offer.model';
import { OfferModel, OFFERT_STATUS } from '../models/offer.model';
import { UserModel } from '../models/user.model';
import { ConnectedUserService } from './connected-user.service';

@Injectable({
  providedIn: 'root'
})
export class OffersService {
 

  constructor(
    private afStore:AngularFirestore,
    private connectedUserState:ConnectedUserService
  ) { }

  getOffers(){
    return this.afStore
    .collection<OfferModel>(COLLECTIONS.OFFERS)
    .valueChanges({idField:"id"})
  }

  createOffer(createOffer:CreateOfferModel){
    return this.connectedUserState
    .connectedUser$
    .pipe(switchMap(connectedUser=>this.createOfferWithUser(connectedUser,createOffer)))
  }

  findOfferByUSerId(connectedUser:UserModel){
    return this.afStore
    .collection<OfferModel>(COLLECTIONS.OFFERS)
    .valueChanges()
    .pipe(
      map(offers=>offers.filter(offer=>offer?.driver?.id==connectedUser.id))
    )
  }

  getOfferById(id: string): Observable<OfferModel> {
   return this.afStore
   .collection<OfferModel>(COLLECTIONS.OFFERS)
   .doc(id)
   .valueChanges()
  }

  private createOfferWithUser(userModel:UserModel,createOffer:CreateOfferModel){
    const offer:OfferModel={
      ...createOffer,
      statut:OFFERT_STATUS.IN_PROGRESS,
      driver:userModel,
      passangers:[],
      id:"",
      
    }
    return from(
      this.afStore.collection(COLLECTIONS.OFFERS)
      .add(offer)
      )
  }





}
