import React from 'react';
import PropTypes from 'prop-types';
import Cousin from '../Cousin/Cousin';

const Uncle = props => {
    return (
        <div className='innerBox'>
            <h3>Uncle</h3>
            <div className='box'>
                <Cousin></Cousin>
            </div>
        </div>
    );
};

Uncle.propTypes = {
    
};

export default Uncle;