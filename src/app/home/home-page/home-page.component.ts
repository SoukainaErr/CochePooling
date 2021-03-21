import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OfferModel } from 'src/app/models/offer.model';
import { OffersService } from 'src/app/services/offers.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  offers$:Observable<OfferModel[]>=null
  departure=""
  arrival=""
  departureDate=""
  departurTime=""

  constructor(
    private offerService:OffersService
  ) { }

  ngOnInit(): void {
    this.offers$=this.offerService.getOffers()

  }

}
