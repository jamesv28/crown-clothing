import {takeEvery} from 'redux-saga/effects';
import SShopActionTypes from './shop.types';

export function* fetchCollectionsAsync() {
    yield console.log('i am being fired');
}

export function* getCollectionStart() {
    yield takeEvery(
        SShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    );
}
