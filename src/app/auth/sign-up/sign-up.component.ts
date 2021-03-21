import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ConnectedUserService } from 'src/app/services/connected-user.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user: UserModel

  constructor(
    private authService: AuthenticationService,
    private userService: UsersService,
    private router:Router,
    private connectedUser:ConnectedUserService
  ) {
    this.user = {
      agree: true,
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      emailAvatar: "",
      id: ""
    }
  }

  ngOnInit(): void {
  }

  onSignUp() {
    this.authService.SignUp(this.user.email, this.user.password)
      .then(res => {
        const user: UserModel = {
          email: this.user.email,
          emailAvatar: res.user?.photoURL,
          firstName: this.user.firstName,
          lastName: this.user.lastName,
          id: res.user?.uid,
          password: this.user.password,
          agree: this.user.agree
        }
        this.userService.craateUser(user)
          .then(res => {
            this.router.navigateByUrl("/app/home")
            this.connectedUser.setConnectedUser(user)
          })
          .catch(err => {
            console.log(err)
          })
      })
      .catch(
        erro => {
          console.log(erro)
        }
      )
  }

}
