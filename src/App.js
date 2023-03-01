import React from "react";
import './style.css';
// import Todo from './component/todo';
// import Users from './component/Users';
// import Card from './component/Card';
// import Carousel from './component/Carousel';
  //  import Joke from './component/Joke';
   import Food from './component/Food';
  //  import Questions from './component/Questions';



function App() {
      return (
        <div>
          {/* Adding non-string dataType */}
        {/* <Joke 
                punchline="It’s hard to explain puns to kleptomaniacs because they always take things literally."
                isPun={true}
                upvotes={10}
                downvotes={2}
                comments={[{author: "", body: "", title: ""}]}
            />
            <Joke 
                setup="I got my daughter a fridge for her birthday." 
                punchline="I can't wait to see her face light up when she opens it." 
                isPun={false}
            />
            <Joke 
                setup="How did the hacker escape the police?" 
                punchline="He just ransomware!"
                isPun={true}
            />
            <Joke 
                setup="Why don't pirates travel on mountain roads?" 
                punchline="Scurvy." 
                isPun={true}
            />
            <Joke 
                setup="Why do bees stay in the hive in the winter?" 
                punchline="Swarm." 
                isPun={true}
            />
            <Joke 
                setup="What's the best thing about Switzerland?" 
                punchline="I don't know, but the flag is a big plus!" 
                isPun={false}
            /> */}
            {/* // First Card */}
       {/* <div style={{display: "flex"}}>
        <Card
        title="Blog"
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum"
        button="Click"
      />
      <Card
        title="Article"
        paragraph="Perspiciatis 
        minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
        quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus"
        button="Read"
      />
      </div> */}
      {/* //second Card with top img */}
      {/* <Card 
       img="katie-zaferes.png"
       rating="5.0"
       reviewCount={6}
       country="USA"
       title="Life Lessons with Katie Zaferes"
       price={136}
      /> */}
        {/* <Todo /> */}
        {/* <Users /> */}
        {/* <Carousel /> */}
        <Food />
        {/* <Questions /> */}
      

        </div>

  );
}

export default App