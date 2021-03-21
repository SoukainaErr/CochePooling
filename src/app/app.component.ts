import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthenticationService } from './services/authentication.service';
import { ConnectedUserService } from './services/connected-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(
    private connectedUser: ConnectedUserService,
    ) {

  }

  
 ngOnInit() {
      this.connectedUser.updateConnected()
  }
}
