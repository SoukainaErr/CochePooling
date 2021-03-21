import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ConnectedUserService } from 'src/app/services/connected-user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  email:string=""
  password:string=""

  constructor(
    private authService:AuthenticationService,
    private router:Router,
    private connectedUser:ConnectedUserService
  ) { }

  ngOnInit(): void {
  }

  onLogin(){
    this.authService.SignIn(this.email,this.password)
    .then(res=>{
      this.router.navigateByUrl("/app/home")
      this.connectedUser.setConnectedUserbyId(res.user.uid)
    })
    .catch(error=>{
    console.error(error)
    })
  }

}
