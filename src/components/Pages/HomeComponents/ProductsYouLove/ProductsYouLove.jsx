/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import ProductCardProductsYouLove from './ProductCardProductsYouLove';

function ProductsYouLove({ data }) {
   

    return (
        <div className='w-auto h-auto p-5 bg-gray-100  overflow-x-auto '>
            <div className='text-gray-700 text-2xl pl-2 absolute left-0'>
                <p>{data.length > 0 && data[4].strategyMessage}</p>
            </div>
            <div className=' w-max mt-14 gap-2 flex'>
                <ProductCardProductsYouLove />
            </div>
        </div>
    )
}

export default ProductsYouLove