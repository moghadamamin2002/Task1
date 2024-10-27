import { useNavigate } from "react-router-dom"


const Button = ({ nameClicker , handelClicker}) => {
  const navigate = useNavigate()
  return (
    <>
        <button className="btn btn-primary" onClick={()=>{navigate(handelClicker)}}> {nameClicker} </button>

    </>
  )
}

export default Button