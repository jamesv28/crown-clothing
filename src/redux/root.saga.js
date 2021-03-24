import {all, call} from 'redux-saga/effects';
import {getCollectionStart} from './shop/shop.saga';

export default function* rootSaga() {
    yield all([
        call(getCollectionStart)
    ])
}