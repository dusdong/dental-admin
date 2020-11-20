import { takeEvery, all, call } from 'redux-saga/effects';
// Types
import { ActionTypes } from './AgendaTypes';
// Workers
import { workerFetchData, workerCreateDataItem, workerUpdateDataItem, workerDeleteDataItem } from './AgendaSagaWorkers';

function* watchFetchData() {
  yield takeEvery(ActionTypes.FETCH_DATA_INIT_ASYNC, workerFetchData);
}

function* watchCreateDataItem() {
  yield takeEvery(ActionTypes.CREATE_DATA_ITEM_INIT_ASYNC, workerCreateDataItem);
}

function* watchUpdateDataItem() {
  yield takeEvery(ActionTypes.UPDATE_DATA_ITEM_INIT_ASYNC, workerUpdateDataItem);
}

function* watchDeleteDataItem() {
  yield takeEvery(ActionTypes.DELETE_DATA_ITEM_INIT_ASYNC, workerDeleteDataItem);
}

export function* watchAgenda() {
  yield all([call(watchFetchData), call(watchCreateDataItem), call(watchUpdateDataItem), call(watchDeleteDataItem)]);
}