/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

function StockingUpToDate({ data }) {
  return (
    <>
      <section className='w-full h-[530px] '>
        <div className='w-full h-auto bg-white pt-8'>
          <div>
            {data.map((d, k) => (
              <p
                key={k}
                className='p-5 text-2xl font-bold'
              >
                {d.header}
              </p>
            ))}

          </div>
          <div className='w-full h-auto bg-white'>
            <div className='flex justify-evenly'>
              {data.length > 0 && data[0].components.map((data, i) => (
                <div key={i} className=''>
                  <img
                    src={data.mediaWeb} alt=""
                    className='h-[400px]'
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default StockingUpToDate