import {all, call} from 'redux-saga/effects';
import {getCollectionStart} from './shop/shop.saga';
import {userSaga} from './user/user.sagas';

export default function* rootSaga() {
    yield all([
        call(getCollectionStart),
        call(userSaga)
    ])
}