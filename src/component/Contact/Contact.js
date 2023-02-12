import React from 'react';
import ContactCard from './ContactCard';
import icont from './../../img/icont.png'
import '../Contact/Contact.css'
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <section className='px-14 my-24 py-8'>
            <div>
                <h1 className="text-xl text-center font-bold head-p">Get In Touch</h1>
                <p className='head-two text-center'>Contact <span>Us</span></p>

                <div className='grid grid-cols-1 md:grid-cols-2 px-24 lg:grid-cols-3 gap-5 py-14 '>
                    <ContactCard img={icont} cardtitle="Phone Us 24/7" des="123-5879406, Email: mahea@gmail.com" bgClass="bg-accent"></ContactCard>
                    <ContactCard img={icont} cardtitle="Get Direction" des="Sector:7, Road:27, House:18, Uttara, Dhaka, 1230 Dhaka." bgClass="bg-neutral"></ContactCard>
                    <ContactCard img={icont} cardtitle="Opening Hours" des="Everyday 11.00 PM - 11.00 AM" bgClass="bg-secondary"></ContactCard>
                </div>
            </div>

            <ContactForm></ContactForm>
        </section>
    );
};

export default Contact;