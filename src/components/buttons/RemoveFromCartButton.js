import React from 'react';
import { useDispatch } from 'react-redux';

import { removeFromCart } from '../../actions/cartOperateActions';
import './ButtonStyles.css';

export const RemoveFromCartButton = (props) => {
  const dispatch = useDispatch();

  function removeChosen(item, e) {
    e.stopPropagation();
    dispatch(removeFromCart(item.name));
  }

  return (
    <div>
      <button
        className="button-remove"
        onClick={(e) => removeChosen(props.item, e)}
      >
        Remove from cart
      </button>
    </div>
  );
};
