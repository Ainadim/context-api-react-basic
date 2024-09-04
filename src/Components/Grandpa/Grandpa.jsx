import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import Father from '../Father/Father';
import './Grandpa.css'
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';

export const someContext = createContext('Gold')
export const MoneyContext = createContext(1000)

const Grandpa = props => {

    const [money, setMoney] = useState(100)

    return (

        <div className='innerBox'>
            <h2>Grandpa</h2>
            <p>{money}</p>
            <MoneyContext.Provider value={[money, setMoney]}>
                <someContext.Provider value='Granpa gives Gold'>

                    <div className='box'>
                        <Father></Father>
                        <Uncle></Uncle>
                        <Aunty></Aunty>
                    </div>


                </someContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

Grandpa.propTypes = {

};

export default Grandpa;