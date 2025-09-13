function ProductCard({product,price,IsAvailable}){

    return(
        <>
        <p>Product : {product}</p>
        <p>Price : {price}/-</p>
        <p>Availability : {IsAvailable===true?"Stock Available":"Out of stock"}</p>
        </>
    )
}
export default ProductCard