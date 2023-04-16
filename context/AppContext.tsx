import {createContext} from 'react';
import {CartItem} from '../types';

export type AppContextValue = {
  user?: Object | null;
  setUser?: React.Dispatch<React.SetStateAction<Object | null>>;
  cartItems?: CartItem[];
  setCartItems?: React.Dispatch<React.SetStateAction<[]>>;
  loggedIn: boolean;
  setLoggedIn?: React.Dispatch<React.SetStateAction<boolean>>;
};

const AppContext = createContext<AppContextValue>({
  user: null,
  setUser: () => {},
  cartItems: [],
  setCartItems: () => {},
  loggedIn: false,
  setLoggedIn: () => {},
});

export default AppContext;
