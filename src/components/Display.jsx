import React from 'react'
import Button from './Button'
import { Outlet, useNavigate } from 'react-router-dom'



const Display = ({data}) => {
    console.log("Display : " + data)
    const navigate = useNavigate()
  return (
    <>
<nav className="navbar navbar-dark bg-dark d-flex justify-content-around">
  
    
    
    <Button handleClick={()=>{navigate("/user")}} nameClicker ={<h4 className='bg-primary'>ALL</h4>} />
    <Button handleClick={()=>{navigate("/showUser")}} nameClicker ={<h4 className='bg-primary'>One By One</h4>} /> 

    {/* <Button handlelClick={} nameClicker ={<h4 className='bg-primary'> OneByOne </h4>}/> */}
  
</nav>
<Outlet/>
{/* ()=>{navigate("/showUser")} */}

    </>
    
)
}

export default Display