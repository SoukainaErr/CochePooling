import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';
import { ConnectedUserService } from './connected-user.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {

  constructor(
    private connectedUser:ConnectedUserService
  ) { }

  getConnectedProfile():Observable<UserModel>{
    return this.connectedUser.connectedUser$
  }
}
