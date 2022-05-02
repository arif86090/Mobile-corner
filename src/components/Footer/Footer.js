import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
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

export default Footer;