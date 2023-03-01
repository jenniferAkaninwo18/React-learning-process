import React from "react"
import React, {useState} from "react"
import React, {useEffect} from "react"

import questions from "../component/dataQuestion"


export default function Questions () {
  //Css Stylings
  const styleli = {
    listStyle: "none"
  }
const [checked, setChecked] = useState()

const question = questions[0]

useEffect(() => {
  console.log(questions)
})
      function onSelect () {
        console.log("welcome")
      }
      // Onclick prev event handler
      function onPrev () {
        console.log("click this button")
      }
       // Onclick next event handler
      function onNext () {
        console.log("click this button")
      }
  return (
     <div className="container">
       <h2 style={{textAlign: "center", padding: ".2em 1.7em"}} className="title">Quiz Application</h2>
       <div className="question-box">
        <p className="text-light">{question.question}</p>
          <ul key={question.correctIndex}>
            {
              question.answers.map((q, i) => (
              <li key={i} style={styleli}>
              <input type="radio" value={false} name="answers" id={`q${i} - answer`} onChange={onSelect(checked)} />
              <label className="text-primary" htmlFor={`q${i} - answer`}>{q}</label>
              <div className="check checked"></div>
            </li>
              ))
            }
          </ul>
          <div className="grid">
          <button className="btn prev" onclick={onPrev()}>Previous</button>
          <button className="btn next" onclick={onNext()}>Next</button>
          </div>
          </div>
    </div>
  )
}