/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import FlagContext from '../../../../contexts/FlagContext'
import { Link } from 'react-router-dom';

function ProductCard({ data, currentIndex }) {

  const { pantryEssentialsData, setProductId, setProductListNumber } = useContext(FlagContext);

  return (
    <>
      {
        pantryEssentialsData.length > 0 && pantryEssentialsData[3].recommendedProducts.map((d, k) => (

          <Link to={`/product/${d.name.replace(/\s+/g, '-')}`} key={k}>
            <button
              onClick={() => {
                setProductId(k);
                setProductListNumber(3);
              }}
              className={`h-[330px] bg-white w-[200px] rounded-xl flex flex-col overflow-y-hidden`}>
              <div className=' pt-2'>
                <div className=' flex justify-center w-full h-auto'>
                  <img className='w-24 aspect-square border-none object-contain' src={d.links.images && d.links.images[0].href} alt="" />
                </div>
              </div>
              <div className=' w-5/6 h-1/3 ml-4'>
                <div className='  w-full h-2/6 '>
                  <div className=' pt-1 pl-2 flex'>
                    <p className='text-3xl font-bold'>
                      {d.price.discount ? d.price.discount.price : Math.floor(d.price.price - d.price.price * 13 / 100)}
                    </p>
                    <div className='flex flex-col'>
                      <span className='text-sm font-bold pl-1 pt-[2px]'>.00</span>
                      <span className='text-xs pl-1 font-thin -mt-1'>PKR</span>
                    </div>
                  </div>
                  <div></div>
                </div>

                <div className='pt-1 text-m font-thin pl-2 w-full h-auto flex gap-1 text-left'>
                  {d.name}
                </div>
              </div>
            </button>
          </Link>
        ))
      }
    </>
  )
}

export default ProductCard