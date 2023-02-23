import React from 'react'

export default function Card(props){
   
    // const styleCard = {
    //     marginLeft: "10px",
    //     borderStyle: "solid",
    //     padding: "5px 5px 10px 10px",
    //     textAlign: "center",
    //     borderRadius: "12px",
    //     backgroundColor: "#ff8fab"
  
        
    //   };
    //   const styleBtn = {
    //     margin: "5px",
    //     border: "5px solid white",
    //     width: "100px",
    //     fontSize: "20px",
    //     padding: "13px 5px 13px 10px",
    //     borderRadius: "7px"
           
    //   };
    return (
      <div className="card">
            <img src={`../images/${props.img}`} className="card--image" />
            <div className="card--stats">
                <img src="../images/star.png" className="card--star" />
                <span>{props.rating}</span>
                <span className="gray">{props.reviewCout} </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    // <div style={styleCard}>
    //     <h1>{props.title}</h1>
    //         <p>{props.paragraph}</p>
    //        <button style={styleBtn}>{props.button}</button>
    // </div>
    )
}

