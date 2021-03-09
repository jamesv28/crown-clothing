import React from 'react';
import {Route} from 'react-router-dom';

import CollectionPage from '../collection/collection.page';
import CollectionOverview from '../../components/collections-overview/collections-overview.component';

const ShopPage = ({match}) => {
    console.log('shop page', match)
    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionOverview} />
            <Route path={`${match.path}/:collectionId`}  component={CollectionPage} />
        </div>
    )
}

export default ShopPage;