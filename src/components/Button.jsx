
const Button = ({ nameClicker ,handleClick}) => {
  return (
    <>
        <button className="btn btn-primary" onClick={handleClick}> {nameClicker} </button>

    </>
  )
}
export default Button