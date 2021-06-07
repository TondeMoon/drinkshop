import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchAllItems } from '../actions/itemsOperateActions';
import { ModalProduct } from './Modal';
import { ItemDetail } from './ItemDetail';

export const MainPage = () => {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.itemsReducer.items);
  const selected = useSelector((state) => state.itemsReducer.selectedItem);
  const qtyPerPage = useSelector((state) => state.itemsReducer.itemsPerPage);
  const pageSelected = useSelector((state) => state.itemsReducer.pageSelected);

  useEffect(() => {
    if (qtyPerPage) {
      dispatch(fetchAllItems(qtyPerPage, pageSelected));
    }
  }, [dispatch, qtyPerPage, pageSelected]);

  return (
    <div>
      {items.length > 0 ? (
        items.map((item) => {
          return (
            <div>
              <ItemDetail item={item} key={item.id} />
            </div>
          );
        })
      ) : (
        <div>''</div>
      )}
      {selected ? <ModalProduct /> : ''}
    </div>
  );
};
