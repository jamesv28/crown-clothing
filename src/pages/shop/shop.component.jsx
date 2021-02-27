import React, { Component } from 'react'
import Shop_Data from './shop.data';
import PreviewCollection from '../../components/preview-collection/preview-collection.component';

class ShopPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collections: Shop_Data
        }
    }

    render() {
        const {collections} = this.state;
        return (
            <div className="shop-page">
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
    }
}

export default ShopPage;