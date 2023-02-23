// Using the UseState and SculptureList to import. This is because the sculpturelist is a word/letter document
import React, { useState } from 'react';
// import './style.css';
import { sculptureList } from './dataCarousel';



function Carousel() {
  const stylingDiv ={
    fontFamily: "georgia"
  }
  const stylebtn1 = {
    marginLeft:  ""
  }
  const styleImg = {
    border: "solid gray",
    borderStyle: "none double dashed",
    borderRadius: "2px 50px"
  }
  const stylePara3 = {
    position: "absolute",
    top: "500px",
    fontSize: "14px",
    fontWeight: "700",
    fontFamily: "cursive",
    color: "#18122B",
    textAlign: "center"
  }
  let [index, setIndex] = useState(0);
  function handlePrev() {
    setIndex(function (prevState) {
      if (prevState > 0) {
        prevState = prevState - 1;
      }
      return prevState;
    });
  }
  function handleNext() {
    setIndex(function (prevState) {
      if (prevState < sculptureList.length - 1) {
        prevState = prevState + 1;
      }
      return prevState;
    });
  }

      return (
      <div style={stylingDiv}>
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext} style={stylebtn1}>Next</button>
      <p>{sculptureList[index].name}</p>
        <p style={stylePara3}>{sculptureList[index].alt}</p>
      <p>{sculptureList[index].artist}</p>
      <img width={475} src={sculptureList[index].url} style={styleImg} />
      <p>{sculptureList[index].description}</p>
        </div>

  );
}

export default Carousel