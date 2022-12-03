import React from 'react';

const InfoCard = ({card}) => {
    
    const {name, discription, icon, bgClass} = card;

    return (
        <div className={`card p-6 text-white lg:card-side shadow-xl ${bgClass}`}>
            <figure>
                <img src={icon} alt="Album" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{discription}</p>
            </div>
        </div>
    );
};

export default InfoCard;