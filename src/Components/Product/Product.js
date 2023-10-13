import {React, useState} from 'react';
import { useParams } from 'react-router-dom';
import products from '../../data/productsData.json'
import Navbar from '../../Shared/Navbar/Navbar';


const Product = () => {
    const {id} = useParams();
    const product = products.find(pd=> pd.id === Number(id));
    console.log(product, id);

    const addToCart = (product) => {
        console.log(product)
    }

    return (
        <section className="bg-brand bg-brand-container">
            <Navbar/>
            <div className="container">
                <div className="fs-4 mt-5 text-center">Product Details</div>

                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-lg-4">
                        <img style={{borderRadius: '1rem', boxShadow: '0 5px 15px #c4c4c44d'}} src={product.image} width={250} className="img-fluid mx-auto d-block" alt={product.name} />
                       
                        <div className="d-flex justify-content-center align-items-center mt-2">
                                <button onClick={() => addToCart(product)} className="btn btn-dark mt-2">Add To Cart</button>
                                <button className="btn btn-success mt-2 ms-2">Buy Now</button>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div style={{borderRadius: '1rem', boxShadow: '0 5px 15px #c4c4c44d'}} className="bg-white p-5 mt-4 mx-auto d-block">
                            <h2 className="fs-5 fw-bold">{product.name}</h2>

                           
                            <hr />
                            <p style={{textAlign: "justify"}}className="fs-6">{product.description}</p>
                            <hr />
                            <small>Price: <span className="fs-5 fw-bold" >{product.price}</span>Taka</small>
                        </div>
                    </div>
                </div>
            </div>
          
        </section>
    );
};

export default Product;