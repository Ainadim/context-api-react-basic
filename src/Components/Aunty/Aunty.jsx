import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../Grandpa/Grandpa';

const Aunty = props => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div className='innerBox'>
            <h3>Aunty</h3>
            <div className='box'>
                <Cousin></Cousin>
            </div>
            
            <p>Money {money}</p>
            <button onClick={() => setMoney(money + 1000)} >Client here</button>
        </div>
    );
};

Aunty.propTypes = {
    
};

export default Aunty;