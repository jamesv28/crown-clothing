import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectDirectorySelections} from '../../redux/directory/directory.selector';

import './directory.styles.scss';

const Directory = ({sections}) => (
        
            <div className="directory-menu">
                {
                    sections.map(({id, ...sectionProps}) => (
                        <MenuItem key={id} {...sectionProps}/>
                    ))
                }
            </div>
    )

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySelections
})

export default connect(mapStateToProps)(Directory);