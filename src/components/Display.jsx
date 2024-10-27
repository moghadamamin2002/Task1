import React from 'react'
import Button from './Button'
import { Outlet } from 'react-router-dom'
import ShowUser from './ShowUser'


const Display = ({data}) => {
    console.log("Display : " + data)
  return (
    <>
<nav className="navbar navbar-dark bg-dark d-flex justify-content-around">
  
    
    
    <Button handelClicker="/user" nameClicker ={<h4 className='bg-primary'>ALL</h4>} /> 
    <Button handelClicker="/showUser" nameClicker ={<h4 className='bg-primary'> OneByOne </h4>}/>
  
</nav>
<ShowUser data={data}/>

    </>
    
)
}

export default Display