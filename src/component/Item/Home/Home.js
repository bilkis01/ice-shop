import React from 'react';
import Item from '../Item';
import Banner from './Banner';
import BannerTwo from './BannerTwo';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Item></Item>
            <BannerTwo></BannerTwo>
        </div>
    );
};

export default Home;