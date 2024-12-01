import "./App.css"
import { AddToCart, RemoveItem } from "./Icons"
import dessertsProducts from "./data.json"

// console.log(dessertsProducts)

const BASE_URL = "https://res.cloudinary.com/dc2c49xov/desserts"

function App() {
  return (
    <>
      <h1>
        Hello World <AddToCart />
      </h1>
      {/* <img src={`${BASE_URL}/brownie-mobile.jpg`} alt="" /> */}
      {dessertsProducts.map((dessert) => {
        const imageUrl = `${BASE_URL}/${dessert.images.thumbnail}`

        return (
          <p key={dessert.name}>
            {/* <img src={BASE_URL + dessert.images.thumbnail} alt="" /> */}
            <img src={imageUrl} alt="" />
          </p>
        )
      })}
      <RemoveItem />
    </>
  )
}

export default App
