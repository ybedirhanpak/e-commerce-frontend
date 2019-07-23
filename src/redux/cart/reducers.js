import { actionTypes } from "./actions";

const initialState = {
    anyProduct: false,
    totalPrice: 0,
    productsList: []
}

function cartReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.DECREASE_FROMCART:
            if(state.productsList.length > 0){
                for(let i =0; i < state.productsList.length; i++){
                    if(state.productsList[i].id ===action.payload.id){
                        let data = {
                            id:state.productsList[i].id,
                            img:state.productsList[i].id,
                            name:state.productsList[i].id,
                            quantity:state.productsList[i].quantity - 1,
                            price:String(Number(state.productsList[i].price) + Number(action.payload.price))

                        }
                        let tmp = state.productsList.filter(product => product.id !== state.productsList[i].id);
                        tmp.splice(i,0,data);
                        return {
                            ...state,
                            anyProduct: true,
                            totalPrice: state.totalPrice + Number(action.payload.price),
                            productsList: tmp
                        }
                    }
                }
            }
        case actionTypes.ADD_TOCART:
            if (state.productsList.length > 0) {
                for (let i = 0; i < state.productsList.length; i++) {
                    if (state.productsList[i].id === action.payload.id) {
                        let data = {
                            id: state.productsList[i].id,
                            img: state.productsList[i].img,
                            name: state.productsList[i].name,
                            quantity: state.productsList[i].quantity + action.payload.quantity,
                            rawPrice: state.productsList[i].rawPrice,
                            price: String(Number(state.productsList[i].price) + 
                                Number(state.productsList[i].rawPrice) * Number(action.payload.quantity))
                        }
                        let tmp = state.productsList.filter(product => product.id !== state.productsList[i].id);
                        if(data.quantity > 0) {
                            tmp.splice(i,0,data);
                        }
                        return {
                            ...state,
                            anyProduct: true,
                            totalPrice: state.totalPrice + Number(state.productsList[i].rawPrice) * Number(action.payload.quantity),
                            productsList: tmp
                        }
                    }
                }
                return {
                    ...state,
                    anyProduct: true,
                    totalPrice: state.totalPrice + Number(action.payload.price),
                    productsList: [...state.productsList, action.payload]
                }

            } else {
                return {
                    ...state,
                    anyProduct: true,
                    totalPrice: state.totalPrice + Number(action.payload.price),
                    productsList: [...state.productsList, action.payload]
                }
            }

        case actionTypes.DELETE_FROMCART:
            let sum = state.totalPrice - Number(action.payload.price);
            if (sum === 0) {
                return {
                    totalPrice: sum,
                    anyProduct: false,
                    productsList: state.productsList.filter(product => product.id !== action.payload.id)
                }
            } else {
                return {
                    totalPrice: sum,
                    anyProduct: true,
                    productsList: state.productsList.filter(product => product.id !== action.payload.id)
                }
            }

        default:
            return state
    }
}

export default cartReducer