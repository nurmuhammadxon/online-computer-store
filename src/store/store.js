import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './counterSlice';
import filterReducer from './filterSlice';
import menuReducer from './isMenu';

const loadCartFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('cart');
        if (serializedState === null) return [];
        return JSON.parse(serializedState);
    } catch (e) {
        console.warn("Could not load cart from localStorage", e);
        return [];
    }
};

const store = configureStore({
    reducer: {
        cart: cartReducer,
        filter: filterReducer,
        menu: menuReducer,
    },
    preloadedState: {
        cart: {
            value: loadCartFromLocalStorage(),
        },
    },
});

store.subscribe(() => {
    try {
        const state = store.getState();
        localStorage.setItem('cart', JSON.stringify(state.cart.value));
    } catch (e) {
        console.warn("Could not save cart to localStorage", e);
    }
});

export default store;
