import React from 'react';
import './Featurd.css'
import f1 from '../../images/i2.jpg'
import f2 from '../../images/i1.jpg'


const Featured = () => {
    return (
        <div className='featured-main py-5 bg-light'>
            <div className='container'>
                <h2 className='text-center'><span>Featured</span> accessories</h2>
                <div className='row mt-5'>
                    <div className='col-md-2'></div>
                    <div className='col-md-8'>
                        <div className='row featured-1'>
                            <div className='col-md-6 mt-4 align-self-center'>
                                <div className='featured-text'>
                                    <h4>MagSafe</h4>
                                    <p>Snap on a magnetic case, wallet, or both. And get faster wireless charging.</p>
                                    <button>Read more</button>
                                </div>
                            </div>
                            <div className='col-md-6 mt-4'>
                                <div className='featured-img'>
                                    <img src={f1} className='img-fluid' alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-2'></div>
                </div>
                <div className='row mt-5'>
                    <div className='col-md-2'></div>
                    <div className='col-md-8'>
                        <div className='row featured-1'>
                        <div className='col-md-6 mt-4'>
                                <div className='featured-img'>
                                    <img src={f2} className='img-fluid' alt="" />
                                </div>
                         </div>
                            <div className='col-md-6 mt-4 align-self-center'>
                                <div className='featured-text'>
                                    <h4>AirTag</h4>
                                    <p>Attach one to your keys. Put another in your backpack. If they’re misplaced, just use the Find My app.</p>
                                    <button>Read more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-2'></div>
                </div>
            </div>
        </div>
    );
};

export default Featured;