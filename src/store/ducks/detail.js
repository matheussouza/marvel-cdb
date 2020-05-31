import { action } from 'typesafe-actions';

export const Types = {
  CHARACTER_DETAIL_REQUEST: "CHARACTER_DETAIL_REQUEST",
  CHARACTER_DETAIL_SUCCESS: "CHARACTER_DETAIL_SUCCESS",
  CHARACTER_DETAIL_FAILURE: "CHARACTER_DETAIL_FAILURE",
  CHARACTER_DETAIL_UPDATE: "CHARACTER_DETAIL_UPDATE",
};

const initialState = {
  data: {},
  loading: true,
  changed: {}
}

export default (state = initialState, { type, payload }) => {
  let data = {};

  switch (type) {

  case Types.CHARACTER_DETAIL_REQUEST:
    return { ...state, loading: true, data: {} }

  case Types.CHARACTER_DETAIL_SUCCESS:
    data = payload.data.data.results[0];

    if (state.changed.hasOwnProperty(data.id)) {
      const modified = state.changed[data.id];
      data.name = modified.name;
      data.description = modified.description;
    }

    return {
      ...state,
      loading: false,
      data
    }

  case Types.CHARACTER_DETAIL_FAILURE:
    return {
      ...state,
      loading: false,
      data: payload.err
    }

  case Types.CHARACTER_DETAIL_UPDATE:
    const modified = state.changed;
    if (!modified.hasOwnProperty(payload.character.id))
      modified[payload.character.id] = {};
    
    modified[payload.character.id] = payload.character;
    data = state.data;
    data.name = payload.character.name;
    data.description = payload.character.description;

    return {
      ...state,
      changed: modified,
      data
    }

  default:
    return state
  }
}

export const loadDetailsRequest = id => action(Types.CHARACTER_DETAIL_REQUEST, {id});
export const loadDetailsSuccess = data => action(Types.CHARACTER_DETAIL_SUCCESS, {data});
export const loadDetailsFailure = err => action(Types.CHARACTER_DETAIL_FAILURE, {err});

export const updateDetails = character => action(Types.CHARACTER_DETAIL_UPDATE, {character});
