import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Navbar/Footer/Footer';

const Cart = () => {

    const cart = JSON.parse(localStorage.getItem('cart'))
    console.log(cart);

    return (
        <section className='bg-brand bg-brand-container'>
            <Navbar/>
          
                <div className="container mt-5">
                    <div className="col-lg-9">
                        <h1 className='fs-4 mt-5'>Shopping Cart</h1>

                        <div className="table-responsive">
                        <table  className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Product</th>
                                    <th>Price</th>
                                    {/* <th>Quantity</th> */}
                                    {/* <th>Sub Total</th> */}
                                    <th>Remove</th>
                                </tr>
                            </thead>

                            <tbody>

                                {
                                    cart.map((product, index)  => 
                                        
                                        <tr key={index+1}>
                                            <td><img src={product.image} className='img-fluid' width={40} alt={product.name} /></td>
                                            <td>{product.name}</td>
                                            <td>{product.price}</td>
                                            {/* <td></td> */}
                                            {/* <td></td> */}
                                            <td><button className='btn btn-danger'>Remove</button></td>
                                        </tr>
                                        
                                        
                                    )}
                                
                            </tbody>
                        </table>
                        </div>
                       
                    </div>

                    <div className="col-lg-3">

                    </div>
                </div>

            <Footer/>
        </section>
    );
};

export default Cart;