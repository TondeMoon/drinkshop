import {
  FETCH_ITEMS,
  FETCH_RECOMMENDATION,
  SELECT_ITEM,
  REMOVE_SELECTION,
  COUNT_TOTAL_QTY_OF_GOODS_FROM_API,
  SET_ITEM_QTY_PER_PAGE,
  SET_PAGE_TO_LOOK,
} from '../actions/itemsOperateActions';

export const initialState = {
  items: [],
  selectedItem: '',
  recommendation: '',
  totalCount: 0,
  itemsPerPage: 25,
  pageSelected: 1,
};

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS: {
      return {
        ...state,
        items: action.payload,
      };
    }

    case SET_ITEM_QTY_PER_PAGE: {
      return {
        ...state,
        itemsPerPage: action.payload,
      };
    }

    case SET_PAGE_TO_LOOK: {
      return {
        ...state,
        pageSelected: action.payload,
      };
    }

    case COUNT_TOTAL_QTY_OF_GOODS_FROM_API: {
      return {
        ...state,
        totalCount: action.payload,
      };
    }

    case FETCH_RECOMMENDATION: {
      return {
        ...state,
        recommendation: action.payload,
      };
    }
    case SELECT_ITEM: {
      return {
        ...state,
        selectedItem: action.payload,
      };
    }
    case REMOVE_SELECTION: {
      return {
        ...state,
        selectedItem: '',
      };
    }
    default:
      return state;
  }
};

export default itemsReducer;
