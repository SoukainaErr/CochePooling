import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
import { COLLECTIONS } from '../models/collections.const';
import { UserModel } from '../models/user.model';
import { filter, map } from "rxjs/operators"
import { AuthenticationService } from './authentication.service';
@Injectable({
  providedIn: 'root'
})
export class ConnectedUserService {



  private readonly connectedUserSubject:BehaviorSubject<UserModel|null>= new BehaviorSubject(null)
  constructor(
    private afStore:AngularFirestore,
    private auth:AuthenticationService
  ) { }

  get connectedUser$(){
    return this.connectedUserSubject
    .asObservable()
    .pipe(filter(user=>!!user))
  }

  get isConnected(){
    return this.connectedUserSubject
    .pipe(
      map(connected=>!!connected)
    )
  }
  
  setConnectedUserbyId(id:string){
    this.afStore
    .collection<UserModel>(COLLECTIONS.USERS)
    .doc(id)
    .valueChanges()
    .subscribe(user=>{
      this.connectedUserSubject.next(user)
    })
  }
  setConnectedUser(UserModel:UserModel){
      this.connectedUserSubject.next(UserModel)
  }

 async logOut() {
    await  this.auth.SignOut()
    this.connectedUserSubject.next(null)

  }

  async updateConnected() {
    const uuid =await this.auth.getConnected()
    if(uuid)
    this.setConnectedUserbyId(uuid)
  }
}
