import React from 'react';
import PropTypes from 'prop-types';
import Mother from '../Mother/Mother';

const Father = props => {
    return (
        <div className='innerBox'>
            <h3>father</h3>
            <div className='box'>
            <Mother></Mother>
            </div>
            
        </div>
    );
};

Father.propTypes = {
    
};

export default Father;