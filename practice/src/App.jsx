import ProductCard from "./ProductCard.jsx"

function App() {
  const productName = "Sunflower Oil"
  const price = 119
  const IsAvailable = false
  return (
    <>
      <ProductCard product={productName}price={price} IsAvailable={IsAvailable} />
    </>
  )
}

export default App
