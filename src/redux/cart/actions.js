
/* Action Types */

const ADD_TOCART = "ADD_TOCART";
const DELETE_FROMCART = "DELETE_FROMCART";

export const actionTypes = {
    ADD_TOCART,
    DELETE_FROMCART
};

/* Action Creators */

export const actionCreators = {
    addtoCART,
    deletefromCART
};

function addtoCART(data) {
    return {
        type: ADD_TOCART,
        payload: data
    };
}

function deletefromCART(data) {
    return {
        type: DELETE_FROMCART,
        payload: data
    };
}



