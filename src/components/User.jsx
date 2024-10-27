const User = ({ data }) => {
  console.log("User : " + data);

  return (
    <>
      {data.map((todo) => (
        <table className="table table-dark table-borderless my-5" key={todo.id}>
          <tbody>
            <tr>
              <th scope="row">Title :</th>
              <td>{todo.title}</td>
            </tr>
            <tr>
              <th scope="row">Position :</th>
              <td>
                {todo.completed ? (
                  <div style={{ color: "green" }}> Done</div>
                ) : (
                  <div style={{ color: "red" }}>Not completed</div>
                )}
              </td>
            </tr>
            <tr>
              <th scope="row">User Id :</th>
              <td>{todo.userId}</td>
            </tr>
            <tr>
              <th scope="row">Usre number :</th>
              <td>{todo.id}</td>
            </tr>
          </tbody>
        </table>
      ))}

      {/* {data.map((todo) => (
        <div className="col" key={todo.id}>
          <div className="row bg-dark ">
            Title :{" "}
            <div className="fw-bold " style={{ color: "yellow" }}>
              {todo.title}
            </div>{" "}
          </div>
          <div className="row bg-dark ">
            Position :{" "}
            <div className="fw-bold " style={{ color: "green" }}>
              {todo.completed ? (
                <div style={{ color: "green" }}> Done</div>
              ) : (
                <div style={{ color: "red" }}>Not completed</div>
              )}
            </div>{" "}
          </div>
          <div className="row bg-dark ">
            User Id : <div className="fw-bold ">{todo.userId}</div>{" "}
          </div>
          <div className="row bg-light ">
            ...................................................................
          </div>
        </div>
      ))} */}
    </>
  );
};

export default User;
