import { GuardsCheckStart } from "@angular/router";
import { Guest } from "./guest.model";

export interface Event {
  id:number
  title:string,
  location:string,
  date:Date,
  description:string,
  guest:Guest
}