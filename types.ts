export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Cart: undefined;
};

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export type Product = {
  id: string;
  maker: string;
  img: string;
  title: string;
  ingredients: string;
  ratings: number[] | null;
  price: string;
};
