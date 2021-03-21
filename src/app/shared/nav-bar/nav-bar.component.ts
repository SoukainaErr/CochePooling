import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserModel } from 'src/app/models/user.model';
import { ConnectedUserService } from 'src/app/services/connected-user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  connectedUser$:Observable<UserModel>=null
  isConnected$:Observable<boolean>=null
  constructor(
    private connectedUserSubject:ConnectedUserService,
    private router:Router

  ) { }

  ngOnInit(): void {
    this.connectedUser$=this.connectedUserSubject.connectedUser$
    this.isConnected$=this.connectedUserSubject.isConnected
  }

  onLogOut(){
    this.connectedUserSubject.logOut()
    this.router.navigateByUrl("/signin")

  }

}
