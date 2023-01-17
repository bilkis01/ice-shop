import React from 'react';
import Item from '../Item';
import Banner from './Banner';
import BannerTwo from './BannerTwo';
import Featured from './Featured';
import Features from './Features';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Item></Item>
            <BannerTwo></BannerTwo>
            <Featured></Featured>
            <Features></Features>
        </div>
    );
};

export default Home;