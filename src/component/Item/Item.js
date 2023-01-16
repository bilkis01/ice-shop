import React from 'react';
import Items from './Items';

const Item = () => {

    const filterItem = (cateItem) => {
        // const updateItem = products.filter((curElem) => {

        //     return curElem.category === cateItem


        // });
        // cateItem === 'all' ? setCategory(products) : setCategory(updateItem)

        //  console.log(category);

    }

    return (
        <div className='px-12'>

            <div>
                <h2 className='head-p'>Food Items</h2>
                <p className='head-two'>Delicious <span>Flavors</span></p>
            </div>

            <div className='filter-btns'>
                <button className='active-btn filter-btn ' onClick={() => filterItem('all')}>All</button>
                <button className=' filter-btn' onClick={() => filterItem('new')}>New</button>
                <button className=' filter-btn' onClick={() => filterItem('bestseller')}>Best Sellers</button>
                <button className=' filter-btn' onClick={() => filterItem('featured')}>Featured</button>
                <button className=' filter-btn' onClick={() => filterItem('onSell')}>On Sell</button>
            </div>
            <br />
            <Items></Items>
        </div>
    );
};

export default Item;