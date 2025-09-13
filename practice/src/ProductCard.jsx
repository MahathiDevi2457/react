
function ProductCard(sample) {

    return (
        <div className="card">
            <p >Product : {sample.product}</p>
            <p className="price">Price : {sample.price}/-</p>
            <p>{sample.isAvailable === true ? <p className="inStock">In Stock </p>:<p className="noStock"> Out of stock</p>}</p>
        </div>
    )
}
export default ProductCard