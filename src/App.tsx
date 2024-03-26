import { useState } from 'react'


function App() {
  

  
  
  
  // let count : number
  let [count,setCount] = useState<string>("")
  

  return (
    <>
      <h1 className="text-xl " onClick={()=>{setCount("haha heheh")}}>
        Hello world! {count}
      </h1>
    </>
  )
}

export default App
