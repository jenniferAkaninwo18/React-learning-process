import React from "react"
import User from "../component/userData"



export default function Users(){
  const styleContent ={
    display: "flex", 
    alignSelf: "center", 
    fontFamily: "cursive",
    backgroundColor: "#ff8fab",
    borderRadius: "30px", 
    paddingBottom: "10px",
    marginTop: "3px",
    width: "80%"
  }
  const styleImg = {
    height: "90px", 
    border: "2px solid white", 
    borderRadius: "50px", 
    marginTop: "10px", 
    marginLeft: "10px"
  }
  const styleSpan={
    marginLeft: "10px"
  }
  const styleGender={
    fontFamily: "georgia", 
    fontSize: "18px", 
    marginLeft: "10px"
  }
  const data = User
  const myUser = data.map((user) =>{
    return(
      <div key={user.id} style={styleContent}>
       <img src={user.image} style={styleImg}/>
       <div>
       <span style={styleSpan}>{user.firstName}</span>
       <span style={styleSpan}>{user.lastName}</span>
       <p style={styleSpan}>{user.birthDate}</p>
       <p style={styleGender}>{user.gender}</p>
       </div>
      </div>
    )
  });
  return(
    myUser
    )
}