import { Testimonial } from './testimonial.model';
import { Rent } from './rent.model';
import { Car } from './car.model';
import { Payment } from './payment.model';
import { Garage } from './garage.model';
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
  Garages:Garage[];
  Payments:Payment[];
  Rents:Rent[];
  Testimonials:Testimonial[]
}
