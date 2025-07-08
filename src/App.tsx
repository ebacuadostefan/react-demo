import { useState } from "react"

const App = () => {
  const [count, setcount] = useState(0);
  const [firstname, setfirstname] = useState("john");

  const handleIncrement = () => {
    setcount(count + 1);
  };

  const handleClick = () => {
    setfirstname("james")
  }

  return (
    <>
      <h1>this is first time using react</h1>
      <p className="text-red-600">hello ako ni</p>
      <button type="button" className="bg-blue-600 text-white rounded-1g p-2 hover:bg-blue-700 cursor-pointer"
        onClick={handleIncrement}>click me {count}</button>

      <button type="button" className="bg-blue-600 text-white p-2 rounded-1g shadow-1g hover:bg-white hover:text-black cursor-pointer"
        onClick={() => setfirstname("stefan")}>clcik me</button>
      <h1>{firstname}</h1>

    </>
  )
}

export default App
