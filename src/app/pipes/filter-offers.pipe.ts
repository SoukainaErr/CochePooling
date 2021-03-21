import { Pipe, PipeTransform } from '@angular/core';
import { OfferModel } from '../models/offer.model';

@Pipe({
  name: 'filterOffers'
})
export class FilterOffersPipe implements PipeTransform {

  transform(offers: OfferModel[], departure:string,arrival:string,departureDate:string,departurTime:string) {
   if(offers){
     if(!!departure)
     offers= offers
     .filter(offer=>offer?.departure?.includes(departure))
     if(!!arrival)
     offers=offers
     .filter(offer=>offer?.arrival?.includes(arrival))
     if(!!departureDate)
     offers=offers
     .filter(offer=>new Date(offer?.date).toString()==new Date(departureDate).toString())
   }


   return offers
  }

}
