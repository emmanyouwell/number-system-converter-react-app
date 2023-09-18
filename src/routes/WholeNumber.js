import React from 'react'
import Calculator from '../components/Calculator.js'
import Navbar from '../components/Navbar.js'
import {useParams} from 'react-router-dom'
const WholeNumber = () => {
    const params = useParams();
    const id = parseInt(params.binary);
  return (
    <div>
        <Navbar/>
        <Calculator name={id} />
        
    </div>
  )
}

export default WholeNumber