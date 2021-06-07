import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchOneRecomendation } from '../actions/itemsOperateActions';
import { ModalProduct } from './Modal';
import { ItemDetail } from './ItemDetail';

export const Recomendation = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOneRecomendation());
  }, [dispatch]);

  const item = useSelector((state) => state.itemsReducer.recommendation)[0];
  const selected = useSelector((state) => state.itemsReducer.selectedItem);

  return (
    <div>
      {item ? <ItemDetail key={item.id} item={item} recommend={true} /> : ''}
      {selected ? <ModalProduct /> : ''}
    </div>
  );
};
