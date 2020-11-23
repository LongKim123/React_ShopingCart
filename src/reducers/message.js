import * as types from './../constants/ActionTypes';
import * as Message from './../constants/Message';

var initialState =Message.MSG_WELLCOME;
const message = (state=initialState,action) =>{
    
    switch(action.type){
        case types.CHANGE_MESSAGE:
            return action.message
        default: return state;
    }
}

export default message;