import { call, put, all, takeLatest } from 'redux-saga/effects';
import api, { authorizationQuery } from '../services/api';
import { PAGE_SIZE } from '../config';
import { loadCharactersSuccess, loadCharactersFailure, Types as CharTypes } from './ducks/characters';
import { loadDetailsSuccess, loadDetailsFailure, Types as DetailTypes } from './ducks/detail';
import { loadSeriesSuccess, loadSeriesFailure, Types as SeriesTypes } from './ducks/series';

export default function* sagas() {
  return yield all([
    takeLatest(CharTypes.GET_CHARACTER_REQUEST, loadCharacters),
    takeLatest(DetailTypes.CHARACTER_DETAIL_REQUEST, loadDetail),
    takeLatest(SeriesTypes.CHARACTER_SERIES_REQUEST, loadSeries),
  ]);
}

function* loadCharacters({ payload }) {
  const { search, page } = payload;

  const filter = search ? `&nameStartsWith=${search}` : '';

  try {
    const response = yield call(api.get, `/characters?${authorizationQuery()}${filter}&offset=${PAGE_SIZE * (page - 1)}`);

    yield put(loadCharactersSuccess(response.data, search));
  } catch (err) {
    yield put(loadCharactersFailure(err));
  }
}

function* loadDetail({ payload }) {
  const { id } = payload;

  try {
    const response = yield call(api.get, `/characters/${id}?${authorizationQuery()}`);

    yield put(loadDetailsSuccess(response.data));
  } catch (err) {
    yield put(loadDetailsFailure(err));
  }
}

function* loadSeries({ payload }) {
  const { id, page } = payload;

  try {
    const response = yield call(api.get, `/characters/${id}/series?${authorizationQuery()}&limit=${PAGE_SIZE}&offset=${PAGE_SIZE * (page - 1)}`);

    yield put(loadSeriesSuccess(response.data));
  } catch (err) {
    yield put(loadSeriesFailure(err));
  }
}