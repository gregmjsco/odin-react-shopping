import './Shop.css'

function Shop(){
    return (
        <section className="shop container">
            <div className="shop__grid-container">
                <div className='shop__box'>
                    <h2>Product 1</h2>
                    <p>This is the p for product 1</p>
                    <button>Button 1</button>
                </div>
                <div className='shop__box'>
                    <h2>Product 2</h2>
                    <p>This is the p for product 2</p>
                    <button>Button 2</button>
                </div>
                <div className='shop__box'>
                    <h2>Product 3</h2>
                    <p>This is the p for product 3</p>
                    <button>Button 3</button>
                </div>
                <div className='shop__box'>
                    <h2>Product 4</h2>
                    <p>This is the p for product 4</p>
                    <button>Button 4</button>
                </div>
            </div>

        </section>
    )
}

export default Shop;