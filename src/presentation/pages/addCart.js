import React, { useEffect, useState } from 'react'

function AddCart() {

    const [totalAmt, settotalAmt] = useState(0)

    // ISKO REPLACE KARNA HAI DYNAMIC DATA SE
    let arrayData=[
        {
            product : "Origin Rascal Scooter",
            price : 500,
            quantity : 2
        },
        {
            product : "mehdi brain moves are very good",
            price : 500000,
            quantity : 1
        },{
            product : "Origin Rascal Scooter",
            price : 500,
            quantity : 2
        },{
            product : "Origin Rascal Scooter",
            price : 500,
            quantity : 2
        },{
            product : "Origin Rascal Scooter",
            price : 500,
            quantity : 2
        },{
            product : "Origin Rascal Scooter",
            price : 500,
            quantity : 2
        },{
            product : "Origin Rascal Scooter",
            price : 500,
            quantity : 2
        },{
            product : "Origin Rascal Scooter",
            price : 500,
            quantity : 2
        },{
            product : "Origin Rascal Scooter",
            price : 500,
            quantity : 2
        }
    ]
    // this is the mapping
    // will have to use useState depending on the situtation

    // useEffect(() => {
    //     arrayData.map((each) => {
    //         settotalAmt((prev)=>{prev+=(each.quantity * each.price)})
    //     })
    // }, [])
    

    let arrayRender = arrayData.map((each)=>{
        // settotalAmt((prev)=>{prev+=(each.quantity * each.price)})
        return(
            <div className= 'cart-list-item'>
                <p className='product-item'>{each.product}</p>
                <p className='price-item'>Rs {each.price}</p>
                <p className='quantity-item'>X{each.quantity}</p>
            </div>
        )
    })
    

    return (
    <div className="master-master">
        <div className='addcart-heading-master'>
            <p className='addcart-heading'>
                We thank you for choosing<br/><p>Bookstore</p> 
            </p>
            {/* some svg with absolute positioning*/}
        </div>
        <div className='master'>
            <div className='input-left'>
                <div className="unit">
                    <h3 className='input-label'>Your Name</h3>
                    <input
                        type="text"
                        className="text-input"
                        placeholder="Eg: Chicken Curry"
                        
                    />
                </div>
                <div className="unit">
                    <h3 className='input-label'>Address</h3>
                    <textarea
                        type="textarea"
                        className="text-input address-input"
                        placeholder="Write your Current Address"
                    />
                </div>
            </div>
            <div className='input-right'>
                <div className="unit">
                    <h3 className='input-label'>Your Email</h3>
                    <input
                        type="text"
                        className="text-input"
                        placeholder="Eg: xyz@gmail.com"
                        
                    />
                </div>
                <div className="unit ">
                    <h3 className='input-label'>Cart</h3>
                    <div className='cart-list-master'>
                        <div className='cart-list'>
                            <div className='cart-list-header cart-list-item'>
                                <p className='product-header product-item'>Product</p>
                                <p className='price-header price-item'>Price</p>
                                <p className='quantity-header quantity-item'>Quantity</p>
                            </div>
                            {arrayRender}
                        </div>
                        {totalAmt}
                    </div>
                    
                </div>
            </div>
        </div>
        <div>
            <button className='addcart-button'>proceed</button>
        </div>
    </div>
  )
}

export default AddCart