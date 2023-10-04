import React from 'react';
import './Home.css';
import Navbar from '../../Shared/Navbar/Navbar';
import Hero from '../Hero/Hero';
import TopProducts from '../TopProducts/TopProducts';


const Home = (props) => {
    return (
        <div className='bg-brand bg-brand-container'>
           <Navbar/>

           <div className="container hero-container my-5">
                <Hero/>
           </div>

           <div className="container">
                <TopProducts/>
           </div>
          
        </div>
    );
};

export default Home;