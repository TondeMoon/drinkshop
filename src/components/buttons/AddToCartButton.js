import React from 'react';
import { useDispatch } from 'react-redux';

import { addToCart } from '../../actions/cartOperateActions';

export const AddToCartButton = (props) => {
  const dispatch = useDispatch();

  function addInCart(item, e) {
    e.stopPropagation();
    dispatch(addToCart(item));
  }

  return (
    <button className="button-modal" onClick={(e) => addInCart(props.item, e)}>
      Buy Me
    </button>
  );
};
