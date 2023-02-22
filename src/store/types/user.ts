// Define the action types as constants
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export interface UserState {
  isLoggedIn: boolean;
  email: string;
}

export interface LoginUserAction {
  type: typeof LOGIN_USER;
  payload: {
    email: string;
  };
}

export interface LogoutUserAction {
  type: typeof LOGOUT_USER;
}

// Define a union type for all the user actions
export type UserAction = LoginUserAction | LogoutUserAction;
