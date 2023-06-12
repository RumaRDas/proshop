import { CAR_ADD_ITEM, CAR_REMOVE_ITEM } from "../../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CAR_ADD_ITEM:
      const item = action.payload;

      const existItem = state.cartItems.find((d) => d.product === item.product);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    default:
      return state;
  }
};
