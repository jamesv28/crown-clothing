import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {createStructuredSelector} from 'reselect';

import CollectionPage from '../collection/collection.page';
import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import {selectionIsCollectionFetching} from '../../redux/shop/shop.selectors';

import {fetchCollectionsAsync} from '../../redux/shop/shop.actions';
import {connect} from 'react-redux';

const CollectionOverwithWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component{

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const {fetchCollectionsAsync} = this.props;
        fetchCollectionsAsync();
    }
    

    componentWillUnmount() {

    }

    render() {
        const {isCollectionFetching, match} = this.props;
        return (
            <div className="shop-page">
                <Route 
                    exact path={`${match.path}`} render={props => <CollectionOverwithWithSpinner isLoading={isCollectionFetching} {...props} /> }/>
                <Route path={`${match.path}/:collectionId`}  render={props => <CollectionPageWithSpinner isLoading={isCollectionFetching} {...props} />} />
            </div>
        )
    }
}
const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectionIsCollectionFetching
})
const mapDispatchToProps = dispatch => ({
    fetchCollectionsAsync: () => dispatch(fetchCollectionsAsync())
})

export default connect(mapStateToProps,mapDispatchToProps)(ShopPage);