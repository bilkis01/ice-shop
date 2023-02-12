import React from 'react';
import '../Testimonial/Test.css'

const Review = ({ review }) => {
    return (
        <div>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                <div class="card-body">
                    <div className='flex  items-center '>
                        <div>
                            <img src={review.img} alt="" />
                        </div>
                        <div>
                            <div className='flex items-center px-8'>
                                <div>
                                    <h3 className='re-head'>{review.name}</h3>
                                    <h4>{review.tag}</h4>
                                </div>
                                <div className='px-5 '>
                                    <i class="fa-solid fa-star stars"></i>
                                    <i class="fa-solid fa-star stars"></i>
                                    <i class="fa-solid fa-star stars"></i>
                                    <i class="fa-solid fa-star stars"></i>
                                    <i class="fa-solid fa-star stars"></i>

                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='flex items-center justify-between'>
                        <div>

                            <p className='t-p'>{review.review}</p>

                        </div>

                        <div>
                            <img src={review.test} alt="" />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Review;