import { Button } from "bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ShowUser = ({ data }) => {
  console.log("Show User :" + data);
  
  const [number , setNumber] = useState(0)
  const [todo , setTodo] = useState(null)
  const Increase =()=>{
    setNumber + 1
  }
  const DecreaseNumber = ()=>{
    number < 1 ? alert("the first user is this") : setNumber(number-1)
  }

  const currentUser =()=>{
    data.find(user => user.id == number);
    setTodo(user)
    
  }
useEffect(()=>{
  currentUser()
} , [])
  return (
    <>
    
      <div className="container" key={todo.id}>
      <div className="row">
        <div className="col">
          <h1>Title :{todo.title}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h1>Class User :{todo.userId}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h1>Condition :{todo.completed ? (
                  <div style={{ color: "green" }}> Done</div>
                ) : (
                  <div style={{ color: "red" }}>Not completed</div>
                )}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h1> User {todo.id}</h1>
        </div>
      </div>
    </div>
    

    <Button  nameClicker = {<i class="fa-solid fa-arrow-left"></i>}  handelClicker={DecreaseNumbe}/>
    <Button nameClicker ={<i className="fa-solid fa-arrow-right"></i>} handelClicker ={Increase} />
    
      
    </>
  );
};

export default ShowUser;
