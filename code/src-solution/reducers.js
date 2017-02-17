import {combineReducers} from 'redux'

import * as Events from "./Actions";

export const INITIAL_STATE = {
  users: [{firstName: "Nicole", lastName: "Rauch"},
    {firstName: "Wilhelm", lastName: "Tell"},
    {firstName: "Che", lastName: "Guevara"}]
};

function users(state = INITIAL_STATE.users, action = {}) {
  switch (action.type) {
    case Events.USER_ADDED:
      return state.concat(action.payload);
  }
  return state;
}

export default function(state = INITIAL_STATE, action = {}){
  return {
    users: users(state.users, action)
  };
};

