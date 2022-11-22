import { Rent } from "./rent.model";

export interface Garage{
      GARAGE_ID :number;
      GARAGE_NAME :string;
      Latitude :string;
      Longitude :string;
      Image1 :string;
      Image2 :string;
      AVAILABLE_FROM :number;
      AVAILABLE_TO :number;
      RENT_PRICE :number;
      Street :string;
      BUILDING_NUMBER :number;
      Status :string;
      GARAGE_MODE :string;
      USER_ID :number;
      Rents:Rent[];
}
