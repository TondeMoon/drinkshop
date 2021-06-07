import axios from 'axios';

export const FETCH_ITEMS = 'items/FETCH_ITEMS';
export const SELECT_ITEM = 'items/SELECT_ITEM';
export const REMOVE_SELECTION = 'items/REMOVE_SELECTION';
export const FETCH_RECOMMENDATION = 'items/FETCH_RECOMMENDATION';
export const COUNT_TOTAL_QTY_OF_GOODS_FROM_API =
  'items/COUNT_TOTAL_QTY_FROM_API';
export const SET_ITEM_QTY_PER_PAGE = 'items/SET_ITEM_QTY_PER_PAGE';
export const SET_PAGE_TO_LOOK = 'items/SET_PAGE_TO_LOOK';

export function actionCreator(type) {
  return function (payload) {
    return {
      type,
      payload,
    };
  };
}

export const setAllItems = actionCreator(FETCH_ITEMS);

export function fetchAllItems(itemsPerPage, pageSelected) {
  return function (dispatch) {
    return axios
      .get(
        `https://api.punkapi.com/v2/beers?page=${pageSelected}&per_page=${itemsPerPage}`
      )
      .then(({ data }) => {
        dispatch(setAllItems(data));
      });
  };
}

export const setItemsQtyPerPage = actionCreator(SET_ITEM_QTY_PER_PAGE);

export function setItemsPerPageQty(itemsPerPage) {
  return function (dispatch) {
    dispatch(setItemsQtyPerPage(itemsPerPage));
  };
}

export const setPageForLooking = actionCreator(SET_PAGE_TO_LOOK);

export function setPage(count) {
  return function (dispatch) {
    console.log(count);
    dispatch(setPageForLooking(count));
  };
}

export const recomendOne = actionCreator(FETCH_RECOMMENDATION);

export function fetchOneRecomendation() {
  return function (dispatch) {
    return axios
      .get('https://api.punkapi.com/v2/beers/random')
      .then(({ data }) => {
        dispatch(recomendOne(data));
      });
  };
}

export const selectOneItem = actionCreator(SELECT_ITEM);

export function chooseItem(id) {
  return function (dispatch) {
    return axios
      .get(`https://api.punkapi.com/v2/beers/${id}`)
      .then(({ data }) => {
        dispatch(selectOneItem(data));
      });
  };
}

export const closeModal = actionCreator(REMOVE_SELECTION);

export function removeSelection() {
  return function (dispatch) {
    dispatch(closeModal());
  };
}

//count overall quantity of items on this API
export const countTotal = actionCreator(COUNT_TOTAL_QTY_OF_GOODS_FROM_API);

export function countAll() {
  return (dispatch) => {
    let totalCount = 0;
    let getAndSetTotalCount = (page = 1) => {
      axios
        .get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=80`)
        .then(({ data }) => {
          if (data.length > 1) {
            page++;
            totalCount = totalCount + data.length;
            getAndSetTotalCount(page);
          } else dispatch(countTotal(totalCount));
        });
    };
    getAndSetTotalCount();
  };
}
