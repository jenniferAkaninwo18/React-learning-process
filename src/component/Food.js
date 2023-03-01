import React from "react"
import {useState} from "react"
import {foods} from "../component/dataFood"

export default function Food () {

  let [searchItem, setSearchItem] = useState()
  // console.log(searchItem)
    return (
  <div className="content">
       <label htmlFor="search" style={{fontSize: "16px"}}>Search : </label>
        <input type="text" className="search" placeholder="search here..." onChange={e => setSearchItem(e.target.value)}/>
        
        <hr/>
        {foods.filter(food=> food.name.toLowerCase().match(searchItem)).map((food) => (
        <div key={food.id} style={{display: "flex",}}>
        <h4>{food.name}</h4>
        <p style={{marginLeft: "10px"}}>{food.description}</p>
      
        </div>
        ))}
    </div>
    )
}

