import { Rent } from './rent.model';

export interface GarageModel {
  gARAGE_ID: number;
  gARAGE_NAME: string;
  latitude: string;
  longitude: string;
  image1: string;
  image2: string;
  aVAILABLE_FROM: number;
  aVAILABLE_TO: number;
  rENT_PRICE: number;
  street: string;
  buildinG_NUMBER: number;
  status: string;
  gARAGE_MODE: string;
  // uSER_ID? :number;
  // rents?:Rent[];
}
