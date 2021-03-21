import { UserModel } from "./user.model";

export interface OfferModel{
    id:string
    statut:OFFERT_STATUS
    driver:UserModel
    passangers:UserModel[]
    availableSeats:number
    departure:string
    arrival:string
    luggage:string
    date:Date
    departureTime:string
    prix:number

}

export enum OFFERT_STATUS{
    DONE="DONE",
    IN_PROGRESS="IN PROGRESS",
    REMOVED="REMOVED",
}