import { IpState } from './ip';
import { SunriseSunsetState } from './sunrisesunset';
import { UserState } from './user'; // Import the user state type

// Define the root state type
export interface RootState {
  user: UserState;
  ip: IpState
  sunsetsunrise: SunriseSunsetState
}
