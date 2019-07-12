import { API } from '../../api-config'
import { GetWithUrl } from '../../services/url-helper'

/* Action Types */

const SAVE_CATEGORIES = 'SAVE_CATEGORIES';

export const actionTypes = {
    SAVE_CATEGORIES
}

/* Action Creators*/

export const actionCreators = {
    saveCategories
}

function saveCategories(categories){
    console.log("saveCategories is working with categories:");
    console.log(categories);
    return {
        type:SAVE_CATEGORIES,
        payload:categories
    }
}

/* Api Call Functions */

export const fetchAllCategories = () => {
    console.log("Fetching all categories...")
    return (dispatch) => {
        GetWithUrl(API+'/categories')
        .then(response => {
            console.log("Reponse acquired: ")
            console.log(response);
            return response.json()
        })
        .then(responseJson => {
            console.log("Reponse to JSON : ")
            console.log(responseJson);
            console.log("Dispatching to: saveCategories");
            dispatch(saveCategories(responseJson));
        })
        .catch(error => console.log('Error when fetch categories\n', error));
    }
}
