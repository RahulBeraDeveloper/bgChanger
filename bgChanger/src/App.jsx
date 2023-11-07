import  { useState } from "react";

const App = () => {
  const [color, setColor] = useState("white");

  return (
    <div className="screen" style={{ backgroundColor: color,
    width:'100%',
    height:'100vh',
    
    }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"></div>
        <button onClick={()=>{setColor("red")}}
          className="outline-none px-4"
          style={{ backgroundColor: "red",  color:"white" }}
        >
          Red
        </button>
        <button 
        onClick={()=>{setColor("green")}}
          className="outline-none px-4"
          style={{ backgroundColor: "green",  color:"white" }} // Change color here as needed
          
        >
          Green
        </button>
        <button
        onClick={()=>{setColor("blue")}}
          className="outline-none px-4"
          style={{ backgroundColor: "blue",  color:"white" }} // Change color here as needed
        >
          Blue
        </button>
        <button
        onClick={()=>{setColor("olive")}}
          className="outline-none px-4"
          style={{ backgroundColor: "olive", color:"white" }} // Change color here as needed
        >
          Olive
        </button>
        <button
        onClick={()=>{setColor("black")}}
          className="outline-none px-4"
          style={{ backgroundColor: "black", color:"white"}} // Change color here as needed
        >
          Black
        </button>
      </div>
    </div>
  );
};

export default App;
