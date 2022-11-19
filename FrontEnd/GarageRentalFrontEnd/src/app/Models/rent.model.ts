import { Payment } from "./payment.model";

export interface Rent{
  RENT_ID:number;
  START_TIME:number;
  END_TIME:number;
  GARAGE_ID:number;
  USER_ID :number;
  RENT_DATE :Date;
  Payments:Payment[];
}
