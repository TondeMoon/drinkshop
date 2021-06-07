import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_CART_QUANTITY,
  DEDUCT_CART_QUANTITY,
} from '../actions/cartOperateActions';

export const initialState = {
  cart: [],
  cartQuantity: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const check = state.cart.findIndex(
        (item) => item.name === action.payload.name
      );
      const index = state.cartQuantity.findIndex(
        (item) => item.name === action.payload
      );
      return check >= 0 && index >= 0
        ? { ...state }
        : {
            ...state,
            cart: [...state.cart, action.payload],
            cartQuantity: [
              ...state.cartQuantity,
              { name: action.payload.name, quantity: 1 },
            ],
          };
    }
    case ADD_CART_QUANTITY: {
      const index = state.cart.findIndex(
        (item) => item.name === action.payload
      );
      return {
        ...state,
        cartQuantity: state.cartQuantity.map((item, i) =>
          index === i ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };
    }

    case DEDUCT_CART_QUANTITY: {
      const index = state.cart.findIndex(
        (item) => item.name === action.payload
      );
      return {
        ...state,
        cartQuantity: state.cartQuantity.map((item, i) =>
          index === i
            ? {
                ...item,
                quantity:
                  item.quantity > 1 ? item.quantity - 1 : (item.quantity = 1),
              }
            : item
        ),
      };
    }

    case REMOVE_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.name !== action.payload),
        cartQuantity: state.cartQuantity.filter(
          (item) => item.name !== action.payload
        ),
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
