import React from 'react';
import products from '../../data/productsData.json'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';


const TopProducts = () => {

    const navigate = useNavigate();

    let topProducts = [];
    for(let i = 0; i<3; i++) {
        const number = Math.floor(Math.random() * products.length);
        if(!topProducts.includes(products[number])) {
            topProducts.push(products[number]);
        }
        else {
            i--;
        }
       
    }

    const addToCart = (product) => {
        console.log(product)
    }

    return (
       
       <section>
            
            <h1 style={{fontSize: '22px', color:'#212529', fontWeight: '700'}}>Top Products of This Week</h1>

            <div className="row products-container justify-content-center align-items-center">
         
              

                {
                    topProducts.map(product => {
                        return (
                            <div key={product.id} className="cart-deck col-lg-3 col-md-5 my-2 col-sm-8 mx-1">
                           
                                <div className="cart">
                                  <Link to={`/product/${product.id}`} className="text-decoration-none text-black">
                                    <img src={product.image} className = "cart-image-top img-fluid mx-auto d-block" alt={product.name} />
                                  </Link>
                                    <div className="d-flex justify-content-between align-items-center">

                                    <div className="cart-body col-sm-6">
                                            <h5 className="cart-title">{product.name}</h5>
                                            <p className='cart-text'>Price: {product.price} Taka</p>
                                    </div>

                                    <div className="d-flex col-sm-6">
                                        <div onClick={() => {navigate(`/product/${product.id}`)}} className="col-sm-6">
                                                <button className= 'btn btn-outline-dark my-3'>Details</button>
                                        </div>
                                        <div className="col-sm-6 mx-3">
                                                <button onClick={() => addToCart(product)} className = 'btn btn-outline-secondary my-3'>Cart</button>
                                        </div>
                                    </div>

                                    </div>
                                </div>
                           
                            </div>
                        )
                    })
                }
            </div>
       </section>
    );
};

export default TopProducts;