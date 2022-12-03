import React from 'react';
import appointment from '../../../assets/images/appointment.png';

const ContactUs = () => {
    return (
        <section className='pb-16 md:mt-6'
        style ={{
            background:`url(${appointment})`
        }}
        >
            <img src={appointment} alt="" className="lg:w-1/2 rounded-lg shadow-2xl" />
            <div className='text-center lg:-mt-64 md:-mt-96'>
                <h4 className='text-primary font-bold'>Contact Us</h4>
                <h2 className='text-2xl font-bold text-white mb-5'>Stay connected with us</h2>
                
                <input type="text" placeholder="Email Address" className="input input-bordered input-sm w-full h-10 max-w-xs mb-5" /><br />
                <input type="text" placeholder="Subject" className="input input-bordered input-sm w-full h-10 max-w-xs mb-5" /><br />
                <input type="text" placeholder="Your message" className="input input-bordered input-lg w-full h-28 max-w-xs mb-8 pb-12" /><br />
                <button className="btn btn-primary px-8 bg-gradient-to-r from-primary to-secondary text-white">Submit</button>
            </div>
        </section>
    );
};

export default ContactUs;