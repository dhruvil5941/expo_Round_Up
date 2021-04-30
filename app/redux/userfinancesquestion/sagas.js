import {all, call, put, takeLatest} from 'redux-saga/effects';
import * as actions from './actions';
import * as actionTypes from './actionTypes';
import {questionListData} from '../../services';

function* questionListRequest() {
  try {
    const responseData = yield call(questionListData);
    if (responseData) {
      yield put(actions.questionListSuccess(responseData));
    }
  } catch (e) {
    yield put(actions.questionListFail(e));
  }
}

export function* questionListSaga() {
  return yield all([
    yield takeLatest(actionTypes.QUESTION_LIST_REQUEST, questionListRequest),
  ]);
}
