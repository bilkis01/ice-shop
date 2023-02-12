import React from 'react';
import './Contact.css'

const ContactForm = () => {
    return (

        <div className='px-24 contact-bg '>
            <h1 className='text-3xl font-bold py-14'>Drop Us A Line</h1>

            <div className='flex'>
            <div>
                <div className='flex py-5 '>
                    <div className='px-14'>
                        <label class="input-group">
                            <input type="text" placeholder="First Name" class="input input-bordered" />
                        </label>
                    </div>
                    <div>
                        <label class="input-group">
                            <input type="text" placeholder="Last Name" class="input input-bordered" />
                        </label>
                    </div>
                </div>
                <div className='flex py-5'>
                    <div className='px-14'>
                        <label class="input-group">
                            <input type="email" placeholder="Email" class="input input-bordered" />
                        </label>
                    </div>
                    <div>
                        <label class="input-group">
                            <input type="text" placeholder="Phone" class="input input-bordered" />
                        </label>
                    </div>
                </div>

                <div className='px-14 py-5'>
                    <textarea placeholder="Write your text" class="textarea textarea-bordered textarea-lg w-full max-w-lg" ></textarea>

                </div>

                <div className='px-14 py-8'>
                    <button className='btn btn-primary text-white'>Send Now</button>
                </div>
            </div>
           <div className='px-14'>
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29186.92898151091!2d90.36077836308873!3d23.87663260972945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5d05e7074dd%3A0xd1c58803049f00c7!2sUttara%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1676198506426!5m2!1sen!2sbd"
                width="400" height="300"
                style={{border:0}}
                allowFullScreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
           </div>
           </div>
        </div>


    );
};

export default ContactForm;