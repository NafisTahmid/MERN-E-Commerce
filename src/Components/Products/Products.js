import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import products from '../../data/productsData.json'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../../Shared/Navbar/Footer/Footer';
import { useState } from 'react';

const Products = () => {

    const navigate = useNavigate();

    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product])
       
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    console.log(cart);

    return (
        <section className='bg-brand bg-brand-container'>
            <Navbar/>

            <div className="container row products-container justify-content-center align-items-center">

                <h1 className="fs-4 text-center mt-5 mb-3">Products</h1>

                {

                    products.map( product => {
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
                                                    <button onClick={() => addToCart(product)} className='btn btn-outline-secondary my-3 '>Cart</button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            
                            </div>
                        )
                    })
                }
            </div>

            <Footer/>
        </section>
    );
};

export default Products;