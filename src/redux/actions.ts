import Actions from "./actions.config";

import { registerService, logInService, getFlights } from "./service";

export const saveUserAction = (user: any) => {
    return async (dispachFn: any) => {
        dispachFn(saveUserPending(user));
        const response: any = await registerService(user);
        if (response.error) alert(response.error.details[0].message)
        else {
            alert(response.message)
            dispachFn(saveUserSuccess(response.redirect));
        }
    };
};


export const saveUserSuccess = (redirect: boolean) => {
    return {
        type: Actions.SAVE_USER_SUCCESS,
        payload: { redirect }
    };
};

export const saveUserPending = (user: any) => {
    return {
        type: Actions.SAVE_USER_PENDING,
        payload: { user }
    };
};

export const disableRidirect = () => {
    return {
        type: Actions.DISABLE_REDIRECT
    };
};

export const stopSession = () => {
    return {
        type: Actions.STOP_SESSION
    };
};


export const logUserAction = (logUser: any) => {
    return async (dispachFn: any) => {
        dispachFn(logUserPending());
        const response: any = await logInService(logUser);
        if (!response.redirect) alert(response.message)
        else {
            alert(response.message)
            dispachFn(logUserSuccess(response.redirect, response.key, response.details));
        }
    };
};


export const logUserSuccess = (redirect: boolean, session: "string", user: "any") => {
    return {
        type: Actions.LOGIN_USER_SUCCESS,
        payload: { redirect, session, user }
    };
};

export const logUserPending = () => {
    return {
        type: Actions.LOGIN_USER_PENDING,
    };
};

export const getFlightsAction = ( searched: any, token:string) => {
    return async (dispachFn: any) => {
        dispachFn(getFlightsPending());
        const response: any = await getFlights(searched, token);
        if (response.errMassage) alert(response.errMassage)
        else {
            dispachFn(getFlightsSuccess(response));
        }
    };
};

export const getFlightsSuccess = (flightsArr: any) => {
    console.log(flightsArr)
    return {
        type: Actions.GET_FLIGHTS_SUCCESS,
        payload: { flightsArr }
    };
};

export const getFlightsPending = () => {
    return {
        type: Actions.GET_FLIGHTS_PENDING,
    };
};
