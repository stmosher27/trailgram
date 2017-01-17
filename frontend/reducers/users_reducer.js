import { RECEIVE_USER } from '../actions/user_actions';
import { CREATE_FOLLOW, DELETE_FOLLOW } from '../actions/follow_actions';

import merge from 'lodash/merge';

const UsersReducer = ( state ={}, action ) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER:
      return action.user;
    default:
      return state;
  }
};

export default UsersReducer;