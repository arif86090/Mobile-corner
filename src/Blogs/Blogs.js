import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='container py-5 '>
            <div className='row'>
            <div className='col-md-4 mt-4'>
                 <div className='question-1'>
                     <h3> What is the purpose of jwt and how does it work</h3>
                     <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
                 </div>
             </div>
             <div className='col-md-4 mt-4'>
                 <div className='question-1'>
                     <h3>Difference between javascript and nodejs</h3>
                     <p>JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use.</p>
                 </div>
             </div>
             <div className='col-md-4 mt-4'>
                 <div className='question-1'>
                     <h3> When should you use nodejs and when should you use mongodb</h3>
                     <p>The powerful Node.js runtime environment has been ranked the technology most commonly used by professional developers. Node.js is an event-driven JavaScript runtime. Node has myriad potential uses for JavaScript development including being a great environment for building efficient network applications.and mongoDb is data storage.we can stored data in mongoDb.if we stored data in mongodb we need node js.so,we used node js.</p>
                 </div>
             </div>
            </div>

        </div>
    );
};

export default Blogs;