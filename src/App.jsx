import "./App.css"
import { AddToCart, RemoveItem } from "./Icons"
import dessertsProducts from "./data.json"

// console.log(dessertsProducts)

// const BASE_URL = "https://res.cloudinary.com/dc2c49xov/desserts"

function App() {
  return (
    <>
      <h1>Hello World ❄</h1>
      {/* <img src={`${BASE_URL}/brownie-mobile.jpg`} alt="" /> */}
      <RemoveItem />
    </>
  )
}

export default App
