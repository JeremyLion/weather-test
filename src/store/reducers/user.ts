import { Reducer } from 'redux';
import { UserAction, UserState, LOGIN_USER, LOGOUT_USER } from '../types/user';

// Define the initial state for the user reducer
const initialState: UserState = {
  isLoggedIn: false,
  email: '',
};

/**
 * The user reducer function.
 * @param state - The current state of the reducer.
 * @param action - The action that was dispatched.
 * @returns The new state of the reducer.
 */
const userReducer: Reducer<UserState, UserAction> = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        isLoggedIn: true,
        email: action.payload.email,
      };
    case LOGOUT_USER:
      return {
        ...state,
        isLoggedIn: false,
        email: '',
      };
    default:
      return state;
  }
};

export default userReducer;