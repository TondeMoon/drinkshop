import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { chooseItem } from '../actions/itemsOperateActions';
import { addQtyToCart, deductQtyFromCart } from '../actions/cartOperateActions';
import { AddToCartButton } from './buttons/AddToCartButton';
import { RemoveFromCartButton } from './buttons/RemoveFromCartButton';
import recommend from '../images/recommend.svg';

import './ItemDetail.css';

export const ItemDetail = (props) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer.cart).map(
    (item) => item.name
  );
  const quantityTotal = useSelector((state) => state.cartReducer.cartQuantity);

  const selectItem = (id) => {
    dispatch(chooseItem(id));
  };

  const addQty = (e, name) => {
    e.stopPropagation();
    dispatch(addQtyToCart(name));
  };

  const deductQty = (e, name) => {
    e.stopPropagation();
    dispatch(deductQtyFromCart(name));
  };

  return (
    <div className="product-card-overall">
      <div
        className="product-card"
        onClick={() => selectItem(props.item.id)}
        key={props.item.id}
      >
        {props.item.image_url !== null ? (
          <div className="product-image-container">
            <img
              src={props.item.image_url}
              alt="Not available"
              className="product-img"
            ></img>
          </div>
        ) : (
          <div className="product-image-container">No photo available </div>
        )}{' '}
        <div className="product-name-description">
          <div>
            {props.recommend ? (
              <div className="recomendations">
                <h5>Our today recomendation! &nbsp;</h5>
                <img
                  alt="thumb Up"
                  className="recommend-thumb-img"
                  src={recommend}
                ></img>
              </div>
            ) : (
              ''
            )}
          </div>
          <p className="product-name">{props.item.name}</p>
          <p className="product-description">{props.item.description}</p>
        </div>
        <div className="product-buttons">
          {cart.includes(props.item.name) ? (
            <div className="product-card-buttons-and-quantity">
              <RemoveFromCartButton item={props.item} />
              <div className="product-quantity">Quantity</div>
              <div className="product-card-add-deduct-block">
                <button
                  className="add-deduct-buttons"
                  onClick={(e) => addQty(e, props.item.name)}
                >
                  +
                </button>
                <div className="product-quantity">
                  {
                    quantityTotal.find((q) => q.name === props.item.name)
                      .quantity
                  }
                </div>
                <button
                  className="add-deduct-buttons"
                  onClick={(e) => deductQty(e, props.item.name)}
                >
                  -
                </button>
              </div>
            </div>
          ) : (
            <div className="product-card-buttons-and-quantity">
              <AddToCartButton item={props.item} />
            </div>
          )}
          &nbsp;&nbsp;
        </div>
      </div>
    </div>
  );
};
