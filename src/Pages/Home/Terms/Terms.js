import React from 'react';
import treatment from '../../../assets/images/treatment.png';

const Terms = () => {
    return (
        <div className="hero lg:mt-20 mt-8">
            <div className="hero-content gap-20 flex-col lg:flex-row">
                <img src={treatment} className=" rounded-lg lg:w-1/2 shadow-2xl" alt='' />
                <div className='sm:mt-0'>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6 text-justify">Looking to Fill a Position? Search & Post within Minutes and Receive Guaranteed Leads. Increase your Chances with DentalPost's Largest Online and Mobile Job Board.Dental Procedures and Treatments From root canals to wisdom tooth extractions, knowing what to expect when you visit the dentist can help you prepare and make better treatment choices.</p>
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Terms;
