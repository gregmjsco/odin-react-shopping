import './Shop.css'

function Shop(){
    return (
        <section className="shop container">
            <div className="shop__grid-container">
                <div className='shop__box shop__box--0margin'>
                    <h2 className='shop__box__title'>Product 1</h2>
                    <p className='shop__box__description'>This is the p for product 1</p>
                    <button className='btn shop__box__btn'>Button 1</button>
                </div>
                <div className='shop__box'>
                    <h2 className='shop__box__title'>Product 2</h2>
                    <p className='shop__box__description'>This is the p for product 2</p>
                    <button className='btn shop__box__btn'>Button 2</button>
                </div>
                <div className='shop__box'>
                    <h2 className='shop__box__title'>Product 3</h2>
                    <p className='shop__box__description'>This is the p for product 3</p>
                    <button className='btn shop__box__btn'>Button 3</button>
                </div>
                <div className='shop__box'>
                    <h2 className='shop__box__title'>Product 4</h2>
                    <p className='shop__box__description'>This is the p for product 4</p>
                    <button className='btn shop__box__btn'>Button 4</button>
                </div>
            </div>

        </section>
    )
}

export default Shop;