import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const InfoCards = () => {

    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            discription: 'Open 9am to 5 pm everyday',
            icon: clock,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            name: 'Visit our location',
            discription: 'Chawkbazar, Chittagong, Bangladesh',
            icon: marker,
            bgClass: 'bg-neutral-focus'
        },
        {
            id: 3,
            name: 'Contact us now',
            discription: '+00 01515683058',
            icon: phone,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        }
    ]

    return (
        <div className='grid gap-6 mt-12 mx-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                cardData.map(card => <InfoCard
                    key = {card.id}
                    card = {card}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards; 