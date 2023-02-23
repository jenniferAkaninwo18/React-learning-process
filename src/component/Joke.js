import React from "react"

//PROPS: Using Conditional rendering
//AND(&&): If props.setup is true render same otherwise render false or use the tenary operator way
// Also, passing a non-string value(boolean) that is not a dataType
export default function Joke(props) {
  const styleh1 = {
    color: "gray",
    textAlign: "center"
  }
  console.log(props.isPun.comments)
    return (
        <div>
        <h1 style={styleh1 }>My Jokes</h1>
      {/* {<h3 style={{display: props.setup ? "block" : "none"}}>Setup: {props.setup}</h3>}  */}
        {props.setup && <h3>Setup: {props.setup}</h3>} 
        <em>Punchline: {props.punchline}</em>
        <hr/>
       
        </div>
    )
}