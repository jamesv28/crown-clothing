import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {createStructuredSelector} from 'reselect';

import CollectionPage from '../collection/collection.page';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import {selectionIsCollectionFetching} from '../../redux/shop/shop.selectors';
import {
    firestore,
    convertCollectionSnapshotToMap
  } from '../../firebase/firebase.utils.js';

import {updateCollections} from '../../redux/shop/shop.actions';
import {connect} from 'react-redux';
import collectionOverviewContainer from '../../components/collections-overview/collection-overview.container';

const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component{

    unsubscribeFromSnapshot = null;

    state = {
        isLoading: true
    }

    componentDidMount() {
        const {updateCollections} = this.props;
        const collectionRef = firestore.collection('collections');

        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({ isLoading: false });
        });
    }
    

    componentWillUnmount() {

    }

    render() {
        const { match} = this.props;
        const {isLoading} = this.state;
        return (
            <div className="shop-page">
                <Route 
                    exact 
                    path={`${match.path}`} 
                    component={collectionOverviewContainer}
                />
                <Route 
                    path={`${match.path}/:collectionId`}  
                    render={props => <CollectionPageWithSpinner isLoading={isLoading} {...props} />} />
            </div>
        )
    }
}
const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectionIsCollectionFetching
});

const mapDispatchToProps = dispatch => ({
    updateCollections: (collectionsMap) => dispatch(updateCollections(collectionsMap))
});

export default connect(mapStateToProps,mapDispatchToProps)(ShopPage);