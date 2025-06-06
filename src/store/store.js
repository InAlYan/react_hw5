import { configureStore } from "@reduxjs/toolkit";

const initialState = {
    theme: 'light'
};

const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_THEME':
            return {theme: action.payload};
        default:
            return state;
    }
};

export const store = configureStore({reducer: themeReducer});

export default store;