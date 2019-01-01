import { Action } from 'redux'
import { User } from '../../Models/User';
import { createPlainObject } from '../../Models/HelperFunciton';

export const login = "Login";
export const loginSuccesfull = "Login Succesfull";
export const logout = "Logout";

class Login implements Action {
    readonly type = login;
    static create = () => createPlainObject(Login, undefined);
}

class LoginSuccesfull implements Action {
    readonly type = loginSuccesfull;
    readonly loggedUser: User | {};

    constructor(loggedUser: User | {}) {
        this.loggedUser = loggedUser;
    }

    static create = (loggedUser: User | {}) => createPlainObject(LoginSuccesfull, loggedUser);
}

export type LoggedUserActions = LoginSuccesfull | Login;

export { Login, LoginSuccesfull }