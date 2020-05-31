import { action } from 'typesafe-actions';
import { PAGE_SIZE } from '../../config';

export const Types = {
  CHARACTER_SERIES_REQUEST: "CHARACTER_SERIES_REQUEST",
  CHARACTER_SERIES_SUCCESS: "CHARACTER_SERIES_SUCCESS",
  CHARACTER_SERIES_FAILURE: "CHARACTER_SERIES_FAILURE"
};

const initialState = {
  data: [],
  loading: true,
  total: 0,
  page: 1
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case Types.CHARACTER_SERIES_REQUEST:
    return { ...state, loading: true, data: [] }

  case Types.CHARACTER_SERIES_SUCCESS:
    return {
      ...state,
      loading: false,
      total: payload.data.data.total,
      data: payload.data.data.results,
      page: (payload.data.data.offset / PAGE_SIZE) + 1,
    }

  case Types.CHARACTER_SERIES_FAILURE:
    return {
      ...state,
      loading: false,
      data: []
    }

  default:
    return state
  }
}

export const loadSeriesRequest = (id, page = 1) => action(Types.CHARACTER_SERIES_REQUEST, {id, page});
export const loadSeriesSuccess = data => action(Types.CHARACTER_SERIES_SUCCESS, {data});
export const loadSeriesFailure = err => action(Types.CHARACTER_SERIES_FAILURE, {err});
