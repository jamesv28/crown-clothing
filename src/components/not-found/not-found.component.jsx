import React from 'react';
import {Link} from 'react-router-dom';

import './not-found.styles.scss';

const NotFoundComponent = () => (
    <section className="not-found">
      <h1>Page Not Found</h1>  
      <p>Maybe the page moved? Get deleted? Is hiding in quarantine?Never existed in the first place?</p>
      <p>
        Let's go <Link to="/"> 
            <strong className="link-to-home">
                home
            </strong>
        </Link>
         and try from there.
      </p>
    </section>
)

export default NotFoundComponent;