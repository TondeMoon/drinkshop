export const ADD_TO_CART = 'cart/ADD_TO_CART';
export const REMOVE_FROM_CART = 'cart/REMOVE_FROM_CART';
export const ADD_CART_QUANTITY = 'cart/ADD_CART_QUANTITY';
export const DEDUCT_CART_QUANTITY = 'cart/DEDUCT_CART_QUANTITY';

export function actionCreator(type) {
  return function (payload) {
    return {
      type,
      payload,
    };
  };
}

export const addCart = actionCreator(ADD_TO_CART);

export function addToCart(name) {
  return function (dispatch) {
    dispatch(addCart(name));
  };
}

export const removeCart = actionCreator(REMOVE_FROM_CART);

export function removeFromCart(name) {
  return function (dispatch) {
    dispatch(removeCart(name));
  };
}

export const incrementQuantity = actionCreator(ADD_CART_QUANTITY);

export function addQtyToCart(name) {
  return function (dispatch) {
    dispatch(incrementQuantity(name));
  };
}

export const decrementQuantity = actionCreator(DEDUCT_CART_QUANTITY);

export function deductQtyFromCart(name) {
  return function (dispatch) {
    dispatch(decrementQuantity(name));
  };
}
