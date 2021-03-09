import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors';

import PreviewCollection from '../../components/preview-collection/preview-collection.component';

import './collections-overview.styles.scss';

const CollectionOverview = ({collections}) => (
    <div className="collections-overview">
        {
            collections.map(({id, ...otherCollection}) => (
                <PreviewCollection 
                    key={id} 
                    {...otherCollection} 
                />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview);