import '../App.css';

function ProductList({ product,addToCart }) {
    return (
        <div className="flex-1">
        <div className='flex'>
            {
                product.map((productItem, productIndex) => {
                    return (
                        <div style={{ width: '33%' }}>
                            <div className='product-item'>
                                <img src={productItem.url} width="100%" />
                                <p>{productItem.name} | {productItem.category} </p>
                                <p> {productItem.seller} </p>
                                <p> Rs. {productItem.price} /-</p>
                                <button className='btton'
                                    onClick={() => addToCart(productItem)}
                                >Add to</button>
                                
                            </div>
                        </div>
                    )
                })
            }
        </div>
        </div>
    )
}

export default ProductList