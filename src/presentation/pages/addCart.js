import { wrap } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import BookstoreVector from '../assets/BookstoreVector.svg'

function AddCart() {

    let amount = 0
    // ISKO REPLACE KARNA HAI DYNAMIC DATA SE
    let arrayData=[
        {
            product : "Origin Rascal Scooter",
            price : 500,
            quantity : 2
        },
        {
            product : "mehdi brain moves are very good",
            price : 500,
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
        amount += each.quantity * each.price
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
            We thank you for choosing<br/><p>Bookstore ;)</p> 
            </p>
        </div>
        {/* <img src={BookstoreVector} alt='' style={{height: '100px', width: '200px', border: 'none'}} /> */}
        
        <div className='master'>
            <div className='input-left'>
                <div className="left-unit">
                    <h3 className='input-label'>Your Name</h3>
                    <input
                        type="text"
                        className="text-input"
                        placeholder="Eg: Chicken Curry"
                        
                    />
                </div>
                <div className="left-unit">
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
                    <h3 className='input-label input-label-right'>Your Email</h3>
                    <input
                        type="text"
                        className="text-input right-input"
                        placeholder="Eg: xyz@gmail.com"
                        
                    />
                </div>
                <div className="unit ">
                    <h3 className='input-label input-label-right'>Cart</h3>
                    <div className='cart-list-master'>
                        <div className='cart-list'>
                            <div className='cart-list-header cart-list-item' style={{position: 'sticky'}}>
                                <p className='product-header product-item'>Product</p>
                                <p className='price-header price-item'>Price</p>
                                <p className='quantity-header quantity-item'>Quantity</p>
                            </div>                    
                        </div>
                        <div className='cart-list-header cart-list-item' style={{flexDirection: 'column', color: 'black', maxHeight: '11rem',overflow: 'scroll'}}>
                            {arrayRender}
                        </div>
                        <div className='cart-list-header cart-list-item' style={{marginLeft: '60%'}}>
                        <p className='quantity-header quantity-item' style={{marginLeft: '-6.5%'}}>Total</p> <p style={{color: 'black', marginLeft: '10%'}}> Rs.{amount}</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <div>
            <button className='addcart-button'>Place Order</button>
        </div>
    </div>
  )
}

export default AddCart