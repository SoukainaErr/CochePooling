import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateOfferModel } from 'src/app/models/create-offer.model';
import { OfferModel } from 'src/app/models/offer.model';
import { OffersService } from 'src/app/services/offers.service';

@Component({
  selector: 'app-create-offer',
  templateUrl: './create-offer.component.html',
  styleUrls: ['./create-offer.component.css']
})
export class CreateOfferComponent implements OnInit {
  offer:CreateOfferModel
  constructor(
    private offerService:OffersService,
    private router:Router,

  ) { 

    this.offer=this.initOffert()
  }

  ngOnInit() {
  }

  createOffer(){
    this.offerService
    .createOffer(this.offer)
    .subscribe(res=>{
      this.router.navigateByUrl("/app/my-offers")
    },
    error=>{

    })

  }

  private initOffert():CreateOfferModel{
    return {
      departureTime:"",
      availableSeats:0,
      departure:"",
      arrival:"",
      luggage:"",
      date: new Date(),
      prix:0
    }
  }

}
