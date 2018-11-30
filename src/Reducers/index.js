import * as actions from '../Actions';

const initialState = {
  userSearchInput: null,
  photos: []
}

export const appReducer = (state=initialState, action) => {
  if (action.type === actions.API_RESULT) {
    console.log('we running in here')
    return Object.assign({}, state, {
      userSearchInput: action.searchText,
      photos: action.photos})
  }
  return state;
};