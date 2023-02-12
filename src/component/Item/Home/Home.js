import React from 'react';
import Contact from '../../Contact/Contact';
import Testimonial from '../../Testimonial/Testimonial';
import Item from '../Item';
import Banner from './Banner';
import BannerTwo from './BannerTwo';
import Featured from './Featured';
import Features from './Features';
import Gallery from './Gallery';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Item></Item>
            <BannerTwo></BannerTwo>
            <Featured></Featured>
            <Features></Features>
            <Gallery></Gallery>
            <Testimonial></Testimonial>
            <Contact></Contact>
        </div>
    );
};

export default Home;