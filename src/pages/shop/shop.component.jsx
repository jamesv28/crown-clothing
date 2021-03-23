import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {createStructuredSelector} from 'reselect';

import CollectionPage from '../collection/collection.page';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import {selectionIsCollectionFetching} from '../../redux/shop/shop.selectors';

import {fetchCollectionsStart} from '../../redux/shop/shop.actions';
import {connect} from 'react-redux';
import collectionOverviewContainer from '../../components/collections-overview/collection-overview.container';

const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component{

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const {fetchCollectionsStart} = this.props;
        fetchCollectionsStart();
    }
    

    componentWillUnmount() {

    }

    render() {
        const { isCollectionFetching, match} = this.props;
        return (
            <div className="shop-page">
                <Route 
                    exact 
                    path={`${match.path}`} 
                    component={collectionOverviewContainer}
                />
                <Route 
                    path={`${match.path}/:collectionId`}  
                    render={props => <CollectionPageWithSpinner isLoading={isCollectionFetching} {...props} />} />
            </div>
        )
    }
}
const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectionIsCollectionFetching
});

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(mapStateToProps,mapDispatchToProps)(ShopPage);