import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { OfferModel } from 'src/app/models/offer.model';
import { ConnectedUserService } from 'src/app/services/connected-user.service';
import { OffersService } from 'src/app/services/offers.service';

@Component({
  selector: 'app-my-offers',
  templateUrl: './my-offers.component.html',
  styleUrls: ['./my-offers.component.css']
})
export class MyOffersComponent implements OnInit {

  offers$:Observable<OfferModel[]>=null

  constructor(
    private connectedUser:ConnectedUserService,
    private offerService:OffersService
  ) { }

  ngOnInit(): void {
    this.offers$ = this.connectedUser.connectedUser$
    .pipe(
      switchMap(connectedUser=>this.offerService.findOfferByUSerId(connectedUser))
    )
  }

}
