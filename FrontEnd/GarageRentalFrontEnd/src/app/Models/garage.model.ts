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
<<<<<<< HEAD
  garagE_MODE: string;
  // uSER_ID? :number;
=======
  gARAGE_MODE: string;
  uSER_ID? :number;
>>>>>>> 2a18819b79ce8c9be1b6aea58a0f493e3f9471bb
  // rents?:Rent[];
}
