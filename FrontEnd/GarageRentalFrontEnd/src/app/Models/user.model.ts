import { GarageModel } from './garage.model';
import { Testimonial } from './testimonial.model';
import { Rent } from './rent.model';
import { Car } from './car.model';
import { Payment } from './payment.model';
export interface User{
  USER_ID :number;
  FIRST_NAME :string;
  LAST_NAME :string;
  Email :string;
  Password :string;
  Phonenumber :number;
  USER_IMAGE :string;
  USER_IDENTITY :string;
  ROLES_ID :number;

  Cars:Car[];
  Garages:GarageModel[];
  Payments:Payment[];
  Rents:Rent[];
  Testimonials:Testimonial[]
}
