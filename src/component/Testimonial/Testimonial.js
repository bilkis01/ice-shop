import React from 'react';
import user from '../../img/user.png';
import users from '../../img/users.png';
import icetesti from '../../img/icetesti.png';
import icetesty from '../../img/icetesty.png';
import Review from './Review';


const Testimonial = () => {

    const reviews = [
        {
            _id: 1,
            name: "Winson Herry",
            review: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero eos error molestias atque ab sunt nisi commodi sint at.",
            img: user,
            tag: "CEO A4Tech Ltd",
            test: icetesti
        },
        {
            _id: 2,
            name: "Winson Herry",
            review: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero eos error molestias atque ab sunt nisi commodi sint at.",
            img: users,
            tag: "CEO A4Tech Ltd",
            test: icetesty
        },
        {
            _id: 2,
            name: "Winson Herry",
            review: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero eos error molestias atque ab sunt nisi commodi sint at.",
            img: user,
            tag: "CEO A4Tech Ltd",
            test: icetesty
        },
    ]
    return (
        <section className='px-14 my-28'>
            <div>
                <h1 className="text-xl font-bold head-p">Testimonial</h1>
                <p className='head-two'>Client <span>Feedback</span></p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  '>

                    {
                        reviews.map((review) => <Review
                            key={review}
                            review={review}
                        >
                        </Review>)
                    }



                </div>
            </div>
        </section>
    );
};

export default Testimonial;