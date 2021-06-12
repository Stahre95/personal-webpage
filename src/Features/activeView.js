import { createAction, createReducer } from "@reduxjs/toolkit"

const home = createAction('home view');
const about = createAction('about view');
const portfolio = createAction('portfolio view');
const contact = createAction('contact view');

const actions = {
    home,
    about,
    portfolio,
    contact
}

const ACTIVEVIEW = {
    HOME: 'home',
    ABOUT: 'about',
    PORTFOLIO: 'portfolio',
    CONTACT: 'contact'
}

const initialState = {
    activeView: ACTIVEVIEW.HOME
}

const reducer = createReducer(initialState, {
    [home]: (state, action) => ({
        ...state,
        activeView: ACTIVEVIEW.HOME
    }),
    [about]: (state, action) => ({
        ...state,
        activeView: ACTIVEVIEW.ABOUT
    }),
    [portfolio]: (state, action) => ({
        ...state,
        activeView: ACTIVEVIEW.PORTFOLIO
    }),
    [contact]: (state, action) => ({
        ...state,
        activeView: ACTIVEVIEW.CONTACT
    }),
});

export { actions, reducer, ACTIVEVIEW };