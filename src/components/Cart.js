import React from 'react';
import { useSelector } from 'react-redux';

import { ModalProduct } from './Modal';
import { ItemDetail } from './ItemDetail';
import { GoToShopButton } from './buttons/GoToShopButton';
import './Cart.css';

export const Cart = () => {
  const cartContents = useSelector((state) => state.cartReducer.cart);
  const selected = useSelector((state) => state.itemsReducer.selectedItem);

  return (
    <div className="cart">
      <h1>Cart</h1>
      <div>
        {cartContents.length > 0 ? (
          cartContents.map((item) => {
            return (
              <div>
                <ItemDetail item={item} key={item.id} />
              </div>
            );
          })
        ) : (
          <div className="cart-name-button">
            <h2>The Cart is empty</h2>
            <GoToShopButton />
          </div>
        )}
        {selected ? <ModalProduct /> : ''}
      </div>
    </div>
  );
};
