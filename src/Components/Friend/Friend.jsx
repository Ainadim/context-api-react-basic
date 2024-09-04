import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { someContext } from '../Grandpa/Grandpa';

const Friend = props => {
    const contextPass =  useContext(someContext)
    return (
        <div>
            <h4>Friend</h4>
            <h3> {contextPass}</h3>
        </div>
    );
};

Friend.propTypes = {
    
};

export default Friend;