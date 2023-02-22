import { LOGIN_USER } from "../types/user";

/**
 * Action creator function that generates a login action.
 * @param email - The email address of the user.
 * @returns The login action object.
 */
export const loginUser = (email: string) => {
  return {
    type: LOGIN_USER,
    payload: email,
  };
};
