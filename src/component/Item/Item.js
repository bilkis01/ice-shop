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
                <button className=' filter-btn' onClick={() => filterItem('vanilla')}>Vanilla</button>
                <button className=' filter-btn' onClick={() => filterItem('Chocolate')}>Chocolate</button>
                <button className=' filter-btn' onClick={() => filterItem('Strawberry')}>Strawberry</button>
                <button className=' filter-btn' onClick={() => filterItem('Butter')}>Butter</button>
                <button className=' filter-btn' onClick={() => filterItem('sell')}>Best Sellers</button>
            </div>
            <br />
            <Items></Items>
        </div>
    );
};

export default Item;