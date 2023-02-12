import React from 'react';

const ContactCard = ({img,cardtitle,des,bgClass}) => {
    return (
        <div>
            <div class={`card lg:card-side bg-base-100 shadow-xl ${bgClass}`}>
                <figure className='pl-5'><img src={img}alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{cardtitle}</h2>
                    <p>{des}</p>
                </div>
            </div>

        </div>
    );
};

export default ContactCard;