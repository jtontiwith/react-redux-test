import * as actions from '../Actions';

const initialState = {
  userSearchInput: 'cats'
  //images: ['example image 1', 'example image 2']
}

export const appReducer = (state=initialState, action) => {
  console.log('hola')
  if (action.type === actions.USER_SEARCH) {
    console.log('oi')
    return Object.assign({}, state, {userSearchInput: action.searchText})  
  }
  return state;
};