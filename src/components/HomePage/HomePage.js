import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Home.css'
import bannerImg from '../../images/banner_01.png';
import man1 from '../../images/2.jpg'
import man2 from '../../images/3.jpg'
import man3 from '../../images/4.jpg'
import Products from '../Products/Products';

const HomePage = () => {

    const [products,setProducts]=useState([]);

        useEffect(() => {
            fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data))
        },[])

    return (
        <div>
            {/* banner */}
            <div className='banner bg-light'>
             <div className='container'>
               <div className='row py-5'>
                    <div className='col-md-6 mt-3 align-self-center'>
                        <div className='banner-text text-center'>
                        <p>New inspriation <span className='towtow'>2022</span></p>
                            <h3>  PHONE MADE FOR YOU!</h3>
                            <p>treading from mobaila and headphone style collaction</p>
                            <button>SHOP NOW</button>
                        </div>
                    </div>
                    <div className='col-md-6 mt-3 text-center'>
                        <div className='banner-img'>
                            <img src={bannerImg} alt="" />
                        </div>
                    </div>
                  </div>
               </div>
            </div>


            {/* product */}

           <div className='home-product py-5'>
               <div className='container'>
                    <div className='all-products'>
                        {
                            products.slice(0,6).map(product => <Products
                            key={product._id}
                            product={product}
                            ></Products>)
                        }
                    </div>
               </div>
           </div>


            {/* review */}
            <div className='clint-review py-5 mt-5'>
                <h2 className='text-center mb-5'>Customer <span>Review</span></h2>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4 mt-4 '>
                            <div className='review-text'>
                                <p>"We have always found Budget Pet Products very well priced , a great selection and fast delivery . Highly recommend this company"</p>
                                <div className='customer-identiti mt-4'>
                                    <img src={man1} alt="" />
                                    <h5>Adam Smath</h5>
                                </div>
                            </div>
                        </div> 
                        <div className='col-md-4 mt-4 '>
                            <div className='review-text'>
                                <p>"We loved the outstanding service we received at WOS, and our Birk blinds truly completed our beautiful home. We loved loved loved them - stylish and practical!"</p>
                                <div className='customer-identiti mt-4'>
                                    <img src={man2} alt="" />
                                    <h5>Robin Zabi</h5>
                                </div>
                            </div>
                        </div> 
                        <div className='col-md-4 mt-4 '>
                            <div className='review-text'>
                                <p>"Have used them before and enjoyed the product. Quality of pizzas has gone downhill and topping content was extremely poor.I was very disappointed and won’t be using Crust again. "</p>
                                <div className='customer-identiti mt-4'>
                                    <img src={man3} alt="" />
                                    <h5>Anal Tramp</h5>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>

            <div className='footer py-2 mt-5 bg-dark'>
                <div className='container'>
                    <div className='row py-3'>
                        <div className='col-md-3 mt-3'>
                            <div className='footer-header'>
                                <h4>EXTRA</h4>
                                <ul className='mt-3'>
                                    <li>Brands</li>
                                    <li>gift certificate</li>
                                    <li>Achiver</li>
                                    <li>Spacial</li>
                                   
                                </ul>
                            </div>
                        </div>
                        <div className='col-md-3 mt-3'>
                            <div className='footer-header'>
                                <h4>INFORMATIOB</h4>
                                <ul className='mt-3'>
                                    <li>About Us</li>
                                    <li>Pripary polici</li>
                                    <li>Trems & Condiation</li>
                                    <li>Contact</li>
                                  
                                </ul>
                            </div>
                        </div>
                        <div className='col-md-3 mt-3'>
                            <div className='footer-header'>
                                <h4>LOCATION</h4>
                                <ul className='mt-3'>
                                    <li>Mirpur,Dhaka</li>
                                    <li>Dinajpur,Lilir Mor</li>
                                    <li>Rajshai,PodmarPar</li>
                                    <li>Rangpur,RailGet</li>
                                  
                                </ul>
                            </div>
                        </div>
                        <div className='col-md-3 mt-3'>
                            <div className='footer-header'>
                                <h4>CONTACT</h4>
                                <div className='contact mt-3'>
                                    <h6>Phone:</h6>
                                    <p>+882345123</p>
                                    <h6>Email:</h6>
                                    <p>mobailcorner@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

        <div className='copyRight  mt-3 text-center text-light'>
            <p>Copyright 2021 &copy; <span>Mobile Corner</span></p>
        </div>

                </div>
            </div>
            
           
             
           
        </div>
        
    );
};

export default HomePage;