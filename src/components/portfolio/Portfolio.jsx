import React from 'react'
import './portfolio.css'
import knickknack from '../../assets/knickknack.png'

const Portfolio = () =>
{
    return (
        <div>
        <a href='https://sheltered-ridge-71744.herokuapp.com/'>
            <img src={knickknack} />
        </a>
        <a href='https://sheltered-ridge-71744.herokuapp.com/'>
            <img src={knickknack} />
        </a>
        <a href='https://sheltered-ridge-71744.herokuapp.com/'>
            <img src={knickknack} />
        </a>
        <a href='https://sheltered-ridge-71744.herokuapp.com/'>
            <img src={knickknack} />
        </a>
        </div>
    )
}

export default Portfolio