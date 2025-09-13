import { useState } from "react"
import "./App.css"
function App() {
  // const handleClick = (name) => {
  //   console.log("You clicked the button")
  //   alert("You've logged in successfully!")
  // }
  const handleChange = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }
  // const [count, setCount] = useState(0)
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Email:${formData.email}\nPassword:${formData.password}\nYou've logged in!`)
  }

  // const handleEmail = (event) => {
  //   setEmail(event.target.value)
  // }
  // const handlePassword = (event) => {
  //   setPassword(event.target.value)
  // }
  // const handleIncrement = () => {
  //   setCount((prevCount) => prevCount + 1)
  //   console.log(count)
  // }

  return (
    <div>
      <p>Login Page</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your emailID" onChange={handleChange} /><br></br>
        <input type="password" placeholder="Enter your password" onChange={handleChange} /><br></br>
        <button type="submit">Login</button>
      </form>
      {/* <p>{count}</p> 
      <button onClick={handleIncrement}>Increment</button> */ }
    </div>
  )
}
export default App
