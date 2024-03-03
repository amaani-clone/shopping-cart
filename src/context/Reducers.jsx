export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD TO CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "REMOVE FROM CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };

    case "CHANGE CART QTY":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };
    default:
      return state;
  }
};
