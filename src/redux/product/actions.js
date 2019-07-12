import {API} from '../../api-config';
import { GetWithUrl, PostWithUrlBody,DeleteWithUrl} from '../../services/url-helper';

/* Action Types */

const SAVE_PRODUCT_LIST = 'SAVE_PRODUCT_LIST';

export const actionTypes = {
    SAVE_PRODUCT_LIST
}

/* Action Creators */

function saveProductList (productList) {
    return {
        type:SAVE_PRODUCT_LIST,
        payload: productList
    }
}




/* Api Call Functions */

export const getProductList = () => {
    console.log("postUserRegister")
    return (dispatch) => {
        GetWithUrl(API + '/products')
        .then(response => response.json())
        .then(response => {
            console.log(response);
            console.log(dispatch);
            dispatch(saveProductList(response));
        })
        .catch(error => console.log("Error when fetching product list\n", error));
    }
}

export const addProduct = (body) => {
    console.log("Adding a new product")
    return(dispatch) => {
        PostWithUrlBody(API + '/products',body)
        .then(response => response.json())
        //.then(dispatch(getProductList()))
        .catch(error => console.log("Error while adding a new product\n",error));
    }
}

export const deleteProduct = (body) => {
    console.log("Deleting an existing product");
    console.log(body);
    return(dispatch) => {
        DeleteWithUrl(API + '/products/' + body)
        .then()
        
        .catch(error => console.log("Errow while deletin a product\n",error));
    }
}