import { actionTypes } from "./actions";

const initialState = {
  productList: [],
  filteredProductList: [],
  currentProduct: {},
  fetchInProgress: true,
  filters: {
    cities: [],
    price: {
      min: "",
      max: ""
    },
    brands: [],
    subcategories: [],
    allSubcategories: [],
    searchText: "",
    sortBy: "new",
    show: "20"
  }
};

function productReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.INITIALIZE_FETCH_PRODUCT:
      return {
        ...state,
        fetchInProgress: true
      };
    case actionTypes.SAVE_PRODUCT_LIST:
      return {
        ...state,
        productList: action.payload,
        fetchInProgress: false
      };
    case actionTypes.SAVE_FILTERED_PRODUCT_LIST:
      return {
        ...state,
        filteredProductList: action.payload,
        fetchInProgress: false
      };
    case actionTypes.SAVE_SINGLE_PRODUCT:
      return {
        ...state,
        currentProduct: action.payload,
        fetchInProgress: false
      };
    case actionTypes.UPDATE_FILTERS:
      if (action.payload.type === "price") {
        return {
          ...state,
          filters: {
            ...state.filters,
            price: {
              min: action.payload.priceFilter.min,
              max: action.payload.priceFilter.max
            }
          }
        };
      } else if (action.payload.type === "subcategories") {
        return {
          ...state,
          filters: {
            ...state.filters,
            subcategories: action.payload.subcategories
          }
        };
      } else if (action.payload.type === "allSubcategories") {
        if (action.payload.isSearchClicked) {
          return {
            ...state,
            filters: {
              ...state.filters,
              allSubcategories: action.payload.allSubcategories
            }
          };
        } else {
          return {
            ...state,
            filters: {
              ...state.filters,
              searchText: initialState.filters.searchText,
              allSubcategories: action.payload.allSubcategories
            }
          };
        }
      } else if (action.payload.type === "searchBar") {
        return {
          ...state,
          filters: {
            ...initialState.filters,
            searchText: action.payload.searchText
          }
        };
      } else if (action.payload.type === "sortBy") {
        return {
          ...state,
          filters: {
            ...state.filters,
            sortBy: action.payload.sortBy
          }
        };
      } else if (action.payload.type === "show") {
        return {
          ...state,
          filters: {
            ...state.filters,
            show: action.payload.show
          }
        };
      } else if (action.payload.type === "city_filter") {
        return {
          ...state,
          filters: {
            ...state.filters,
            cities: action.payload.cities
          }
        };
      } else if (action.payload.type === "brand_filter") {
        return {
          ...state,
          filters: {
            ...state.filters,
            brands: action.payload.brands
          }
        };
      }
      return state;
    default:
      return state;
  }
}

export default productReducer;
