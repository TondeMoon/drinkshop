import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-modal';

import { AddToCartButton } from './buttons/AddToCartButton';
import { GoToCartButton } from './buttons/GoToCartButton';
import { removeSelection } from '../actions/itemsOperateActions';
import { RemoveFromCartButton } from './buttons/RemoveFromCartButton';
import './Modal.css';

Modal.setAppElement('#root');

export const ModalProduct = () => {
  const [modalIsOpen, setIsOpen] = useState(true);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer.cart).map(
    (item) => item.name
  );

  function closeModal() {
    setIsOpen(false);
    dispatch(removeSelection());
  }

  const item = useSelector((state) => state.itemsReducer.selectedItem[0]);

  return (
    <div>
      <Modal isOpen={modalIsOpen} className="modal">
        <div>
          <p className="product-name-modal">{item.name}</p>
          <p>{item.tagline}</p>
          <img
            src={item.image_url}
            alt="product look"
            className="product-img-modal"
          ></img>
          <div>
            <p className="product-description-modal">{item.description}</p>
            <p>{item.brewers_tips}</p>
          </div>
        </div>
        <AddToCartButton item={item} />
        {cart.includes(item.name) ? (
          <div className="removeGoButtons">
            <RemoveFromCartButton item={item} /> <GoToCartButton />
          </div>
        ) : (
          ''
        )}
        &nbsp;&nbsp;
        <button className="button-modal" onClick={closeModal}>
          close
        </button>
      </Modal>
    </div>
  );
};
