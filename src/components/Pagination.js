import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  countAll,
  setItemsPerPageQty,
  setPage,
} from '../actions/itemsOperateActions';
import { itemsPerPage } from '../constants/itemsPerPage';
import './Pagination.css';

export const Pagination = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(countAll());
  }, [dispatch]);

  const itemsQuantity = useSelector((state) => state.itemsReducer.totalCount);
  const qtyPerPage = useSelector((state) => state.itemsReducer.itemsPerPage);
  const pagesQuantity = Math.ceil(itemsQuantity / qtyPerPage) + 1;
  const pagesArray = Array.from(Array(pagesQuantity), (x, i) => i);
  pagesArray.shift();

  const pagesArrayFromPagesQuantity = (qty) => {
    dispatch(setItemsPerPageQty(qty));
  };

  const goToPage = (count) => {
    dispatch(setPage(count));
  };

  return (
    <div>
      <div className="pagination-itemsPerPage">
        <h4 className="pagination-name">Items per page</h4>
        <button
          className="button-modal"
          onClick={() => pagesArrayFromPagesQuantity(itemsPerPage.small)}
        >
          {itemsPerPage.small}
        </button>
        <button
          className="button-modal"
          onClick={() => pagesArrayFromPagesQuantity(itemsPerPage.medium)}
        >
          {itemsPerPage.medium}
        </button>
        <button
          className="button-modal"
          onClick={() => pagesArrayFromPagesQuantity(itemsPerPage.large)}
        >
          {itemsPerPage.large}
        </button>
      </div>
      <ul className="pagination-list">
        {pagesArray.map((count) => {
          return (
            <li key={count} onClick={() => goToPage(count)}>
              {count}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
