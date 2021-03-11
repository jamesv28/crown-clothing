import React from 'react';
import Directory from '../../components/directory/directory.component';

// import './homepage.styles.scss';
import {HomePageContainer} from './homepage.styles';

const HomepageComponent = (props) => {

    return (
        <HomePageContainer>
            <Directory />
        </HomePageContainer>
    )
}

export default HomepageComponent;