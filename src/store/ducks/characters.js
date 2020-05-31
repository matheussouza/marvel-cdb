import { action } from 'typesafe-actions';
import { PAGE_SIZE } from '../../config';

export const Types = {
  GET_CHARACTER_REQUEST: 'CHARACTER_REQUEST',
  GET_CHARACTER_SUCCESS: 'CHARACTER_SUCCESS',
  GET_CHARACTER_FAILURE: 'CHARACTER_FAILURE'
}

const initialState = {
  data: [],
  search: '',
  page: 1,
  total: 0,
  loading: false,
  error: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case Types.GET_CHARACTER_REQUEST:
      return { ...state, data: [], loading: true }

    case Types.GET_CHARACTER_SUCCESS:
      return {
        ...state, 
        loading: false, 
        search: payload.search,
        total: payload.data.data.total,
        data: payload.data.data.results,
        page: (payload.data.data.offset / PAGE_SIZE) + 1,
        error: []
      }

    case Types.GET_CHARACTER_FAILURE:
      return {
        ...state, loading: false, data: [], error: payload.err
      }

    default:
      return state
  }
}

export const loadCharactersRequest = (search, page = 1) => action(Types.GET_CHARACTER_REQUEST, { search, page });
export const loadCharactersSuccess = (data, search) => action(Types.GET_CHARACTER_SUCCESS, { data, search });
export const loadCharactersFailure = (err) => action(Types.GET_CHARACTER_FAILURE, err);