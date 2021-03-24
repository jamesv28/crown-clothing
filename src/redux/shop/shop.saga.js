import {takeEvery, call, put} from 'redux-saga/effects';
import SShopActionTypes from './shop.types';
import {firestore, convertCollectionSnapshotToMap} from '../../firebase/firebase.utils';

import {
    fetchCollectionsSuccess,
    fetchCollectionsFailure
} from './shop.actions';

export function* fetchCollectionsAsync() {

    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));
    }
    catch(err) {
        yield put(fetchCollectionsFailure(err.message))
    }

}

export function* getCollectionStart() {
    yield takeEvery(
        SShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    );
}
