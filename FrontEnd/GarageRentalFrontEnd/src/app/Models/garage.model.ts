import { Rent } from './rent.model';

export interface GarageModel {
  garagE_ID: number;
  garagE_NAME: string;
  latitude: string;
  longitude: string;
  image1: string;
  image2: string;
  availablE_FROM: number;
  availablE_TO: number;
  renT_PRICE: number;
  street: string;
  buildinG_NUMBER: number;
  status: string;
  garagE_MODE: string;
  // uSER_ID? :number;
  // rents?:Rent[];
}
