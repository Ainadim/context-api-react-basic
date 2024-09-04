import React from 'react';
import PropTypes from 'prop-types';
import Friend from '../Friend/Friend';

const Brother = props => {
    return (
        <div className='innerBox'>
            <h4>Brother</h4>
            <div className='box'>
                <Friend></Friend>
            </div>
        </div>
    );
};

Brother.propTypes = {
    
};

export default Brother;