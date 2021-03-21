import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { COLLECTIONS } from '../models/collections.const';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private afStore:AngularFirestore
  ) { }

  craateUser(user:UserModel){
    return this.afStore
    .collection<UserModel>(COLLECTIONS.USERS)
    .doc(user.id)
    .set(user)
  }
}
