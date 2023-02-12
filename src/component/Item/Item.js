import React, { useEffect, useState } from 'react';
import Items from './Items';

const Item = () => {

    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [nonOfElement, setnonOfElement] = useState(4);
    // console.log(products);

    const slice = products.slice(0, nonOfElement)

    useEffect(() => {
        fetch('Product.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    const filterItem = (cateItem) => {
        const updateItem = products.filter((curElem) => {

            return curElem.category === cateItem


        });

        cateItem === 'all' ? setCategory(products) : setCategory(updateItem)

        // console.log(category);

    }

    const loadMore = () => {
        setnonOfElement(nonOfElement + nonOfElement)
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
                <button className=' filter-btn' onClick={() => filterItem('butter')}>Butter</button>
                <button className=' filter-btn' onClick={() => filterItem('sell')}>Best Sellers</button>
            </div>
            <br />


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-24'>

                {

                    category.length ? category.map(product => {
                        return (
                            <Items
                                key={product._id}
                                product={product}

                            >
                            </Items>
                        )
                    }) : slice.map(product => {
                        return (
                            <Items
                                key={product._id}
                                product={product}

                            >
                            </Items>
                        )
                    })

                }
            </div>
            <br />
            <button className='btn btn-primary block w-52 text-white' onClick={() => loadMore()}>
                Discover More
            </button>


        </div>
    );
};

export default Item;