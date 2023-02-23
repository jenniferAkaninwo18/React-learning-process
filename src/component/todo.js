import React from 'react';
import todos from '../component/dataTodo';

export default function Todo() {
const styleDiv = {
  fontFamily: "cursive",
   backgroundColor: "#ff8fab",
    borderRadius: "5px",
     marginTop: "5px",
     height: "90px",
     width: "90%"
}
const styleSpan1 = {
  padding: "15px",
  marginTop: "10px"
}
const styleSpan2 = {
  // padding: "15px",
  // marginTop: "10px"
}
const styleSpan3 = {
  marginLeft: "15px",
  fontSize: "18px"
}
  return todos.map((todo) => {
    return (
      <div key={todo.id}  style={styleDiv}>
        {" "}
        <span style={styleSpan1}>{todo.todo}</span> 
        <span style={styleSpan2}>{todo.completed ? '✅' : '❌'}</span>
        <p  style={styleSpan3}>{todo.userId}</p>
        <br />
        <br />
      </div>
    );
  });
}
