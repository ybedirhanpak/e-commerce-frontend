import { actionTypes } from "./actions";

const initialState = {
  anyProduct: false,
  totalPrice: 0,
  productsList: []
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.DECREASE_FROMCART:
      if (state.productsList.length > 0) {
        for (let i = 0; i < state.productsList.length; i++) {
          if (state.productsList[i].id === action.payload.id) {
            let data = {
              id: state.productsList[i].id,
              img: state.productsList[i].id,
              name: state.productsList[i].id,
              quantity: state.productsList[i].quantity - 1,
              price: state.productsList[i].price + action.payload.price
            };
            let tmp = state.productsList.filter(
              product => product.id !== state.productsList[i].id
            );
            tmp.splice(i, 0, data);
            return {
              ...state,
              anyProduct: true,
              totalPrice: Number(state.totalPrice + action.payload.price),
              productsList: tmp
            };
          }
        }
      }
    case actionTypes.ADD_TOCART:
      if (state.productsList.length > 0) {
        for (let i = 0; i < state.productsList.length; i++) {
          if (
            state.productsList[i].id === action.payload.id &&
            state.productsList[i].size === action.payload.size
          ) {
            let data = {
              id: state.productsList[i].id,
              img: state.productsList[i].img,
              name: state.productsList[i].name,
              quantity:
                state.productsList[i].quantity + action.payload.quantity,
              rawPrice: state.productsList[i].rawPrice,
              price:
                state.productsList[i].price +
                state.productsList[i].rawPrice * action.payload.quantity,
              oldPrice: state.productsList[i].oldPrice,
              size: state.productsList[i].size
            };

            let tmp = state.productsList;
            tmp.splice(i, 1, data);
            return {
              ...state,
              anyProduct: true,
              totalPrice:
                state.totalPrice +
                state.productsList[i].rawPrice *
                  Number(action.payload.quantity),
              productsList: tmp
            };
          }
        }
        return {
          ...state,
          anyProduct: true,
          totalPrice: Number(state.totalPrice + action.payload.price),
          productsList: [...state.productsList, action.payload]
        };
      } else {
        return {
          ...state,
          anyProduct: true,
          totalPrice: state.totalPrice + action.payload.price,
          productsList: [...state.productsList, action.payload]
        };
      }

    case actionTypes.DELETE_FROMCART:
      let sum = state.totalPrice - action.payload.price;
      console.log("sum", sum);
      if (sum <= 0) {
        sum = 0;
      }
      let product, index;
      for (let i = 0; i < state.productsList.length; i++) {
        if (
          state.productsList[i].id === action.payload.id &&
          state.productsList[i].size === action.payload.size
        ) {
          product = state.productsList[i];
          index = i;
          break;
        } else if (
          state.productsList[i].id === action.payload.id &&
          state.productsList[i].size !== action.payload.size
        ) {
          product = state.productsList[i];
        }
        index = i;
      }
      console.log("productdelete", product);
      let tmp = state.productsList;
      tmp.splice(index, 1);
      if (sum === 0) {
        console.log("sum0", sum);
        return {
          totalPrice: 0,
          anyProduct: false,
          productsList: []
        };
      } else {
        return {
          totalPrice: sum,
          anyProduct: true,
          productsList: tmp
        };
      }

    default:
      return state;
  }
}

export default cartReducer;
