import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UserModel } from 'src/app/models/user.model';
import { ProfileServiceService } from 'src/app/services/profile-service.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  user$:Observable<UserModel>

  constructor(
    private profileService:ProfileServiceService
  ) { }

  ngOnInit(): void {
    this.user$=this.profileService.getConnectedProfile()
  }

}
