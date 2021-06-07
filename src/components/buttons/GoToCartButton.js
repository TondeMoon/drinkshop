import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { removeSelection } from '../../actions/itemsOperateActions';

export const GoToCartButton = (props) => {
  const [modalIsOpen, setIsOpen] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();

  function closeModal() {
    setIsOpen(false);
    dispatch(removeSelection());
  }

  function cartClick(e) {
    e.stopPropagation();
    if (modalIsOpen) {
      closeModal();
    }
    history.push('/checkout');
  }

  return (
    <div>
      <button className="button-modal" onClick={(e) => cartClick(e)}>
        Go To Cart
      </button>
    </div>
  );
};
