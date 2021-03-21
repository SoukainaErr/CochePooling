import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs';
import firebase from 'firebase/app';

@Injectable({
    providedIn: 'root'
})

export class AuthenticationService {
   
    userData: Observable<firebase.User | null>;

    constructor(private angularFireAuth: AngularFireAuth) {
        this.userData = angularFireAuth.authState;
    }


    /* Sign up */
    SignUp(email: string, password: string) {
        return this.angularFireAuth
            .createUserWithEmailAndPassword(email, password)

    }

    /* Sign in */
    SignIn(email: string, password: string) {
        return this.angularFireAuth
            .signInWithEmailAndPassword(email, password)

    }

    /* Sign out */
    SignOut() {
        return this.angularFireAuth
            .signOut();
    }

    async getConnected():Promise<string>{
       return (await this.angularFireAuth.currentUser)?.uid
 
    }

}