import { GuardsCheckStart } from "@angular/router";
import { Guest } from "./guest.model";

export interface EventModel {
  id:number
  title:string,
  location:string,
  date:Date,
  description:string,
  guest:Guest
}