import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import CollectionPage from '../collection/collection.page';
import CollectionOverview from '../../components/collections-overview/collections-overview.component';

import {updateCollections} from '../../redux/shop/shop.actions';
import {connect} from 'react-redux';
import {firestore, convertCollectionSnapshotToMap} from '../../firebase/firebase.utils';

class ShopPage extends Component{

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const {updateCollections} = this.props;

        const collectionRef = firestore.collection('collections');

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapShot => {
            const collectionsMap = convertCollectionSnapshotToMap(snapShot);
            updateCollections(collectionsMap);

        });

    }
    

    componentWillUnmount() {

    }

    render() {
        const {match} = this.props;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionOverview} />
                <Route path={`${match.path}/:collectionId`}  component={CollectionPage} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap =>
     dispatch(updateCollections(collectionsMap))
    
})

export default connect(null,mapDispatchToProps)(ShopPage);