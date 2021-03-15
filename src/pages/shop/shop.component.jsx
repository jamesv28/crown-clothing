import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import CollectionPage from '../collection/collection.page';
import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import {updateCollections} from '../../redux/shop/shop.actions';
import {connect} from 'react-redux';
import {firestore, convertCollectionSnapshotToMap} from '../../firebase/firebase.utils';

const CollectionOverwithWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component{

    state = {
        loading: true
    }

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const {updateCollections} = this.props;

        const collectionRef = firestore.collection('collections');

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapShot => {
            const collectionsMap = convertCollectionSnapshotToMap(snapShot);
            updateCollections(collectionsMap);
            this.setState({
                loading: false
            })
        });

    }
    

    componentWillUnmount() {

    }

    render() {
        const {loading} = this.state;
        const {match} = this.props;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={props => <CollectionOverwithWithSpinner isLoading={loading} {...props} /> }/>
                <Route path={`${match.path}/:collectionId`}  render={props => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap =>
     dispatch(updateCollections(collectionsMap))
    
})

export default connect(null,mapDispatchToProps)(ShopPage);