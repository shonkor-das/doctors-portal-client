import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {

    const servicesData = [
        {
            id: 1,
            name: 'Fluoride  Treatment',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            img: fluoride,
        },
        {
            id: 2,
            name: 'Cavity Fillilng',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            img: cavity,
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            img: whitening,
        }
    ]
 
    return (
        <div className='lg:mt-16 mt-8'>
            <div className='text-center'>
                <h3 className='text-2xl font-bold text-primary uppercase'>Our Services</h3>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    servicesData.map(service => <Service
                        key = {service.id}
                        service = {service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;