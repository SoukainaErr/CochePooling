import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { OfferModel } from 'src/app/models/offer.model';
import { OffersService } from 'src/app/services/offers.service';

@Component({
  selector: 'app-offer-detail',
  templateUrl: './offer-detail.component.html',
  styleUrls: ['./offer-detail.component.css']
})
export class OfferDetailComponent implements OnInit {

  offer$:Observable<OfferModel>=null
  constructor(
    private activedRouter:ActivatedRoute,
    private router:Router,
    private offerService:OffersService
  ) { }

  ngOnInit() {
   this.offer$ = this.activedRouter.paramMap
    .pipe(
      switchMap(params=>this.offerService.getOfferById(params.get("id"))),
      tap(offer=>{
        if(!offer)
        this.router.navigateByUrl("/app/home")
        
      })
    )
  }

}
