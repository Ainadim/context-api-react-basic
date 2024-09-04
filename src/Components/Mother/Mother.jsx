import React from 'react';
import PropTypes from 'prop-types';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';
import MySelf from '../MySelf/MySelf';

const Mother = props => {
    return (
        <div>
            <h3>Mother</h3>
            <div className='box'>
                <MySelf></MySelf>
                <Brother></Brother>
                <Sister></Sister>
            </div>
        </div>
    );
};

Mother.propTypes = {

};

export default Mother;